import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useTransition, animated, config } from "react-spring";
import "./styles.module.css";


export default function HamburgerMenuTwo (props) {

  const [isOpen, setIsOpen] = useState(false);

  const styleToggleButton = {
    fontSize: "3rem",
    color: "rgb(36,36,36)",
    padding: 0,
    border: "none",
    background: "none"
  };

  const fullscreenMenu = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0.80)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      position: "absolute",
      maxHeight: "100vh",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    leave: { opacity: 0, transform: "scale(0.80)" },
    config: config.gentle
  });

  const openButton = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0)",
      position: "absolute"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)"
    },
    leave: { opacity: 0, transform: "scale(0)" },
    config: config.stiff
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "2rem",
        overflow: isOpen ? "hidden" : "auto",
        maxHeight: "100vh"
      }}
    >
      <div style={{ position: "relative", zIndex: 20 }}>
        {openButton.map(({ item, key, props }) =>
          !item ? (
            <animated.div key={key} style={props}>
              <button style={styleToggleButton} onClick={toggleMenu}>
                <MdMenu />
              </button>
            </animated.div>
          ) : (
            <animated.div key={key} style={props}>
              <button style={styleToggleButton} onClick={toggleMenu}>
                <MdClose />
              </button>
            </animated.div>
          )
        )}
      </div>
      <div style={{ paddingTop: "50px" }}>
        <h1>
          Knights of Ni, we are but simple travelers who seek the enchanter who
          lives beyond these woods.
        </h1>
        <p>
          We found them. Well, we did do the nose. We want a shrubbery!! I
          dunno. Must be a king.
        </p>
        <p>
          Found them? In Mercia?! The coconut's tropical! You don't vote for
          kings. What a strange person. I dunno.{" "}
          <strong> Must be a king.</strong> <em> And this isn't my nose.</em>{" "}
          This is a false one.
        </p>
        <h2>Bloody Peasant!</h2>
        <p>
          Oh, ow! Did you dress her up like this? Where'd you get the coconuts?
          Ah, now we see the violence inherent in the system! Where'd you get
          the coconuts? Did you dress her up like this?
        </p>
        <ol>
          <li>The Knights Who Say Ni demand a sacrifice!</li>
          <li>What do you mean?</li>
          <li>I'm not a witch.</li>
        </ol>
        <h3>I have to push the pram a lot.</h3>
        <p>
          Who's that then? Ah, now we see the violence inherent in the system!
          No, no, no! Yes, yes. A bit. But she's got a wart. Well, we did do the
          nose.
        </p>
        <ul>
          <li>Well, we did do the nose.</li>
          <li>Bring her forward!</li>
          <li>Burn her!</li>
        </ul>
        <p>
          You don't vote for kings. Where'd you get the coconuts? The swallow
          may fly south with the sun, and the house martin or the plover may
          seek warmer climes in winter, yet these are not strangers to our land.
        </p>
        <p>
          Shut up! Oh, ow! Well, what do you want? Now, look here, my good man.
        </p>
        <p>
          She looks like one. What a strange person. I'm not a witch. Who's that
          then? …Are you suggesting that coconuts migrate? Where'd you get the
          coconuts?
        </p>
        <p>
          Ah, now we see the violence inherent in the system! I am your king. I
          am your king. Bloody Peasant!
        </p>
        <p>
          You don't frighten us, English pig-dogs! Go and boil your bottoms,
          sons of a silly person! I blow my nose at you, so-called Ah-thoor
          Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits! Shh!
          Knights, I bid you welcome to your new home. Let us ride to Camelot!
        </p>
        <p>
          Well, I didn't vote for you. Shut up! I have to push the pram a lot.
          And this isn't my nose. This is a false one.
        </p>
        <p>
          And this isn't my nose. This is a false one. I have to push the pram a
          lot. On second thoughts, let's not go there. It is a silly place.
          Well, Mercia's a temperate zone! Knights of Ni, we are but simple
          travelers who seek the enchanter who lives beyond these woods.
        </p>
        <p>
          No, no, no! Yes, yes. A bit. But she's got a wart. She looks like one.
          She looks like one. The Lady of the Lake, her arm clad in the purest
          shimmering samite, held aloft Excalibur from the bosom of the water,
          signifying by divine providence that I, Arthur, was to carry
          Excalibur. That is why I am your king.
        </p>
        <p>
          We shall say 'Ni' again to you, if you do not appease us. Who's that
          then? I don't want to talk to you no more, you empty-headed animal
          food trough water! I fart in your general direction! Your mother was a
          hamster and your father smelt of elderberries! Now leave before I am
          forced to taunt you a second time!
        </p>
        <p>
          Burn her! Shut up! Will you shut up?! I'm not a witch. You can't
          expect to wield supreme power just 'cause some watery tart threw a
          sword at you! Well, how'd you become king, then?
        </p>
        <p>
          Why? Listen. Strange women lying in ponds distributing swords is no
          basis for a system of government. Supreme executive power derives from
          a mandate from the masses, not from some farcical aquatic ceremony.
        </p>
      </div>

      <div>
        {fullscreenMenu.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <ul
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "8vw",
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                    overflow: "hidden",
                    textAlign: "left"
                  }}
                >
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </ul>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};



