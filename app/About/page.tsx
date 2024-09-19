import { FC } from 'react';
import { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  backgroundColor: '#f5e9e2', // Light brown background color
  color: '#4a4a4a', // Darker text color for contrast
  boxSizing: 'border-box',
  padding: '1rem',
};

const topImageStyle: CSSProperties = {
  width: '110%', // Full width of the container
  height: 'auto', // Auto height to maintain aspect ratio
  overflow: 'hidden', // Hide any overflow
  marginTop: '3rem', // Space above the top image
  marginLeft:'-2rem',
};

const topImageElementStyle: CSSProperties = {
  width: '100%',
  height: '450px', // Fixed height for the top image
  objectFit: 'cover', // Cover the container while maintaining aspect ratio
};

const aboutUsSectionStyle: CSSProperties = {
  textAlign: 'center',
  marginBottom: '2rem', // Space below the "About Us" section
  marginTop: '1rem', // Space above the "About Us" section
};

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2rem', // Space between sections
};

const imageContainerStyle: CSSProperties = {
  flex: '1', // Allow image container to take available space
  maxWidth: '750px', // Limit image container width to slightly larger than text container
  maxHeight: '450px', // Max height for the image container
  overflow: 'hidden', // Hide any overflow
  margin: '1rem',
};

const imageElementStyle: CSSProperties = {
  width: '100%',
  height: '100%', // Maintain full height of container
  objectFit: 'cover', // Cover the container while maintaining aspect ratio
};

const textStyle: CSSProperties = {
  flex: '1', // Allow text container to take available space
  maxWidth: '45%', // Limit text container width to slightly smaller than image container
  padding: '1rem',
  textAlign: 'left', // Align text to the left
};

const headingStyle: CSSProperties = {
  fontStyle: 'bold',
  fontSize: '5rem',
  marginBottom: '1rem',
  color: '#6b4e3d',
  fontWeight: 'bold',
};

const paragraphStyle: CSSProperties = {
  padding: '2rem',
  fontSize: '1.4rem',
  lineHeight: '1.6',
  margin: '0 0 1rem 0', // Add bottom margin
};
const aboutUsParagraphStyle: CSSProperties = {
  fontSize: '1.2rem',
  maxWidth: '900px', // Limit the width of the text block
  margin: '0 auto', // Center the text block horizontally
  marginTop:'1rem',
  padding: '0 1rem', // Add some padding on the sides
}

const About: FC = () => {
  return (
    <div style={containerStyle}>
      <div style={topImageStyle}>
        <img
          src="images/Coffee Beans.jpg" // Add your full-width image URL here
          alt="Top Banner Image"
          style={topImageElementStyle}
        />
      </div>
      <div style={aboutUsSectionStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={aboutUsParagraphStyle}>
          Welcome to 'Brewed Bliss', Located in the heart of Iloilo City, we are a specialty coffee shop dedicated to showcasing the rich and diverse coffee flavors the Philippines has to offer. 
        </p>
        <p style={aboutUsParagraphStyle}>
          Join us on a journey of taste and discovery as we explore the vibrant coffee culture of the Philippines. From classic blends to single-origin beans, our menu offers something for every palate.
        </p>
      </div>
      <div style={sectionStyle}>
        <div style={imageContainerStyle}>
          <img
            src="images/DiverseBeans.jpg"
            alt="Description of image"
            style={imageElementStyle}
          />
        </div>
        <div style={textStyle}>
          <h2 style={headingStyle}>Experience the Philippines in Every Cup</h2>
          <p style={paragraphStyle}>
            At Brewed Bliss, We can guarantee taste of the richness of our locally sourced coffee, from the high caffeine robusta beans to the sweeter and zesty arabica beans, you are sure to taste the bliss of the Philippiens in every cup.
          </p>
        </div>
      </div>
      <div style={{ ...sectionStyle, flexDirection: 'row' }}>
        <div style={textStyle}>
          <h2 style={headingStyle}>The Team Behind it All</h2>
          <p style={paragraphStyle}>
            Mga gago lg kami nga asta lg sa stick nga kape. Mahal na ang iced coffee para saamon
          </p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="menu_pics/aboutcoffee.jpg"
            alt="Description of image"
            style={imageElementStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
