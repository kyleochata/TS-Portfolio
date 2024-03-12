import './GitHBanner.scss'

const GitHBanner = () => {
  return (
    <section className="gh-banner-home">
      <a
        href="https://github.com/kyleochata"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="gh-container">
          <h2 className="gh-b-title">
            Interested in seeing my other projects?
          </h2>
          <h3 className="gh-b-subtitle">Click here to check out my GitHub</h3>
        </div>
      </a>
    </section>
  )
}
export default GitHBanner
