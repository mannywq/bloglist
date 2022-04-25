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

const mostLikes = (blogs) => {

    const map = new Map()

    blogs.map(blog => map.set(blog.author, (map.has(blog.author)) ? map.get(blog.author) + blog.likes : blog.likes ))
  
    let mostLikes = {
      'author': '',
      'likes' : 0
    }
  
    for (let [author, likes] of map){
      if(mostLikes.likes < likes){
        mostLikes = {
          'author': author,
          'likes' : likes
        }
      }
    }
  
    return mostLikes
  }

module.exports = { 

    dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes
}