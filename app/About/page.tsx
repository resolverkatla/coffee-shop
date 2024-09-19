import { FC } from 'react';
import { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  backgroundColor: '#f5e9e2', // Light brown background color
  color: '#4a4a4a', // Darker text color for contrast
  display: 'flex',
  flexDirection: 'row', // Horizontal layout
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Fullscreen height
  boxSizing: 'border-box',
};

const imageStyle: CSSProperties = {
  flex: '1', // Allow image container to take available space
  maxWidth: '50%', // Limit image container width to half of the container
  height: '50%', // Full height of the container
  marginRight: '2rem', // Space between image and text
  overflow: 'hidden', // Hide any overflow
};

const imageElementStyle: CSSProperties = {
  width: '100%',
  height: '100%', // Full height of the container
  objectFit: 'cover', // Cover the container while maintaining aspect ratio
};

const textBoxStyle: CSSProperties = {
  backgroundColor: '#faf0e6', // Slightly darker than the page background
  padding: '2rem',
  borderRadius: '20px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', // Box shadow
  maxWidth: '100%', // Full width of the text container
  margin: '0 auto', // Center the box horizontally
};

const textContainerStyle: CSSProperties = {
  marginRight: '2rem', // Added margin-right
  flex: '2', // Allow text container to take more space
  maxWidth: '50%', // Limit text container width to half of the container
  textAlign: 'center' as const, // Center align text inside the box
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
  maxWidth: '100%', // Full width of the text container
  color: '#8d6e5a',
  margin: '0',
};

const galleryContainerStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap', // Allow wrapping of items
  justifyContent: 'center', // Center the items horizontally
  gap: '1rem', // Gap between gallery items
  marginTop: '5rem', // Space between text box and gallery
};

const profileCardStyle: CSSProperties = {
  width: '150px',
  height: '150px',
  backgroundColor: '#faf0e6',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow for profile cards
};

const profileImageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Cover the profile card while maintaining aspect ratio
};

const nameStyle: CSSProperties = {
  textAlign: 'center',
  marginTop: '0.5rem',
  fontSize: '1rem',
  color: '#4a4a4a',
};

const profiles = [
  { name: 'Alice', image: 'profile1.jpg' },
  { name: 'Bob', image: 'profile2.jpg' },
  { name: 'Charlie', image: 'profile3.jpg' },
  { name: 'Diana', image: 'profile4.jpg' },
];

const About: FC = () => {
  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img
          src="menu_pics/aboutcoffee.jpg"
          alt="Description of image"
          style={imageElementStyle}
        />
      </div>
      <div style={textContainerStyle}>
        <div style={textBoxStyle}>
          <h1 style={headingStyle}>About Us</h1>
          <p style={paragraphStyle}>
            Welcome to Brewed Bliss, your go-to destination for the finest iced coffee in town. Our journey began with a passion for delivering the perfect cup of iced coffee, crafted with care and a touch of creativity. At Brewed Bliss, we believe in using only the highest quality beans, ethically sourced and expertly roasted to bring out rich, complex flavors.
          </p>
          <p style={paragraphStyle}>
            Our mission is to create a welcoming space where coffee lovers can enjoy expertly brewed iced coffee, made with love and dedication. Whether you're stopping by for your daily pick-me-up or to catch up with friends, we promise an exceptional experience with every visit.
          </p>
          <p style={paragraphStyle}>
            Join us at Brewed Bliss and indulge in the ultimate iced coffee experience. We can’t wait to serve you!
          </p>
        </div>
        <div style={galleryContainerStyle}>
          {profiles.map((profile) => (
            <div key={profile.name} style={profileCardStyle}>
              <img
                src={`menu_pics/${profile.image}`}
                alt={profile.name}
                style={profileImageStyle}
              />
              <div style={nameStyle}>{profile.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
