import { FaRegGrinAlt, FaRegHandPointDown } from 'react-icons/fa';

export default function About() {
  const smiley = FaRegGrinAlt();
  const pointer = FaRegHandPointDown();
  return (
    <div className="aboutpage">
      <h2>About Me {smiley}</h2>
      <hr></hr>
      <div>
        <h3>Luis Ortiz</h3>
        <img
          className="profile"
          src="https://avatars.githubusercontent.com/u/96318347?v=4"
          alt="Luis"
        />
        <p className="bio">
          I am a full stack developer with a background in
          Logistics/transportation. I have a passion for wildlife, space
          exploration, and baseball. 
          <br/>
          <br/>
          {pointer} Talk to me about: {pointer}
        </p>
        <ul className="bioList">
          <li>The Mets!</li>
          <li>Any BBC Nature docu-series</li>
          <li>James Webb Telescope</li>
          <li>UFOs</li>
          <li>Side hustle ideas</li>
          <li>retro video games</li>
          <li>Road Trips</li>
        </ul>
        <div className="links">
          <a className="github" href="https://github.com/Lortiz528">
            GitHub
          </a>

          <p>
            <a href="https://www.buymeacoffee.com/lortiztech">
              <img
                align="center"
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                height="50"
                width="210"
                alt="lortiztech"
              />
            </a>
          </p>
          <a href="https://linkedin.com/in/lortiz528" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="lortiz528"
              height="30"
              width="40"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
