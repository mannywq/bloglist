const _ = require('lodash')

const dummy = (blogs) => {

   return 1

}

const totalLikes = (blogs) => {

    return blogs.reduce((sum, {likes}) => sum += likes, 0)

}

const favouriteBlog = (blogs) => {

    const max =  blogs.reduce((sum, {likes}) => sum > likes ? sum : likes, 0)

    console.log(max)

    return blogs.find(blog => blog.likes === max)


}

const mostBlogs = (blogs) => {

    const winner = _.chain(blogs)
    .countBy('author')
    .map((blogs, author) => ({author, blogs}))
    .sortBy('blogs')
    .last()
    .value()

    return winner

}

module.exports = { 

    dummy, totalLikes, favouriteBlog, mostBlogs
}