import React from 'react'

const NewsletterForm = () => {
  return (
    <form>
      <input type="email" name="email" required />
      <input type="submit" value="Subscribe" />
    </form>
  )
}

export default NewsletterForm
