# URL Regex Tutorial

Greetings GitHubbers and google searchers, today we're going to learn about how to use a regular expression to find a url in a document.

## Summary

`/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`

The above code looks like a lot to make sense of at first glance, but I'm here to break down each regex component one by one and then put it back together so that you can understand how this cryptic string of characters came to be.

I'll be using the following URL as an example:

`https://gist.github.com/Torvec/675b4465926a137bc9410f8b180f7469`

Let's dive in!

## Table of Contents

- [Breakdown](#breakdown)
- [First Capture Group](#first-capture-group)
- [Second Capture Group](#second-capture-group)
- [Third Capture Group](#third-capture-group)
- [Fourth Capture Group](#fourth-capture-group)
- [End of the Pattern](#end-of-the-pattern)
- [About the Author](#about-the-author)
- [Helpful Links](#helpful-links)

## Breakdown

Lets break down each functional part of the code in the order it appears and then define them indivually:  


| `/` | `^` | `(https?:\/\/)?` | `([\da-z\.-]+)` | `\.` | `([a-z\.]{2,6})` | `([\/\w \.-]*)*`  | `\/?` | `$` | `/` |
|-----|-----|------------------|-----------------|------|------------------|-------------------|-------|-----|-----|

### Beginning the Pattern

- `/` - This marks the beginning of the regex pattern


- `^` - This is the beginning of the string and anything after it will be what is matched against

### First Capture Group

- `(https?:\/\/)?` - This is the first captured group because it is contained within the `(` and `)`, and the `?` at the end makes it optional so it will match a url whether it has `http://` or `https://` or neither.  
*NOTE:* The `?` after `https` makes the `s` optional  
> The first capture group is what matches the HyperText Transfer Protocol portion of the URL:  
> `https://`


### Second Capture Group

- `([\da-z\.-]+)` - This is the second captured group. It is using a character class `[ ]` to match any digit 0 through 9 with `\d`, and any lowercase letter a through z with `a-z` along with a literal period or hyphen with `\.-`. Finally it can match once or unlimited times thanks to the `+` between the `]` and `)` characters.  
*NOTE:* The \ in `\d` is what changes it from a literal character to a special token that gives it it's functionality.  
> The second capture group is what is able to match the subdomain and domain name part of the URL:  
> `gist.github`
 

- `\.` This is looking for a literal `.` character and that's thanks to the escape character `\` before it.  
> This is looking for the . after the domain name part of the URL

### Third Capture Group

- `([a-z\.]{2,6})` - This is the third captured group. This is looking for any characters a through z with `a-z` and a literal period with `\.`. It also has to be between 2 and 6 characters long due to the `{2,6}` quantifier applied to the captured group.  
> The third capture group is what is able to match the top level domain of the URL:  
> `com`

### Fourth Capture Group

- `([\/\w \.-]*)*` - This is the fourth captured group. It is looking for a `/` character with `\/`, any characters `Aa` through `Zz` and `0` through `9` with `\w`, any periods or hyphens with `\.-`, and it can be match zero or unlimited times thanks to the `*` characters.  
*NOTE:* The `\` in `\w` is what turns it into a special token instead of it being a literal character
> The fourth capture group is able match everything that is a path, query, or anchor part of the URL:  
> `/Torvec/675b4465926a137bc9410f8b180f7469`


- `\/?` - This is looking for a literal `/` character thanks to the escape character `\` and it is also optional because of the `?` at the end.  
> This means the URL can end with a / or not and still be a valid match

### End of the Pattern

- `$` - This is the end of the string and anything before it will be what is matched against


- `/` - This marks the end of the regex pattern


## About the Author

Hi, I'm **Edward Von Schondorf**.

I'm an aspiring full stack web developer currently enrolled in the UC Berkley Full Stack Web Development Bootcamp. Many years ago I used to do front end web development before joining the US Navy and then became a Automation Controls Technician afterwards. I am actively transitioning into a full stack engineer or front-end engineer role and always looking for oportunities to grow and learn.

- [GitHub Profile](https://github.com/Torvec)
- [LinkedIn](https://www.linkedin.com/in/edward-von/)
- [Portfolio](https://torvec.github.io/m2_my_portfolio/)

### Helpful Links

- [MDN Web Docs Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)
- [Regular Expressions 101](https://regex101.com/)
- [The Coding Train Regular Expressions Youtube Playlist](https://youtube.com/playlist?list=PLRqwX-V7Uu6YEypLuls7iidwHMdCM6o2w&si=tSp9WKupNqUlEF7G)