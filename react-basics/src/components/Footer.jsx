const links={
  website:'/website-link'

}

function Footer() {
  return (
    <div>
      Additional Links 
      <a href={links.website}>website</a>
      <a href="/twitter-link">twitter</a>
      <a href="/contact-link">e-mail</a>
    </div>
  )
}

export default Footer