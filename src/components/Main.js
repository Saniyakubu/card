function Main() {
  return (
    <main className="main-section">
      <header className="main-header">
        <h1 className="name">Laura Smith</h1>
        <p>
          <span>Frontend Developer</span>
        </p>
        <small>laurasmith.website</small>
      </header>
      <div className="buttons">
        <button className="btn email">Email</button>
        <button className="btn linkedin">LinkedIn</button>
      </div>
      <section className="main-about">
        <div className="main-details">
          <h1 className="about">About</h1>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div>
          <h1>Interests</h1>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;
