const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products including associated Category and Tag data
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [Category, Tag]
    });
    res.status(200).json(productData);
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get one product by id including associated Category and Tag data
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [Category, Tag]
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// create new product
// req.body should look like this...
// {
//  product_name: "Basketball",
//  price: 200.00,
//  stock: 3,
//  category_id: 1,
//  tagIds: [1, 2, 3, 4]
// }
// if there's product tags, we need to create pairings to bulk create in the ProductTag model
router.post('/', async (req, res) => {
  try {
    const productData = await Product.create(req.body)
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: productData.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(productData)
  }
  catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// update product by id
// create filtered list of new tag_ids
// figure out which ones to remove
// run both actions
router.put('/:id', async (req, res) => {
  try {
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id }
      });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }
    res.status(200).json(productData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  }
  catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
