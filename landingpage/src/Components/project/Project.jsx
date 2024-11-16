import React,{useState} from 'react';
import './project.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa'; 
import images from "../../assets";

const projects = [
  { title: 'Online Banking', imgSrc: images.OB, categories: ['Development'] },
  { title: 'Classic Industry', imgSrc: images.OC, categories: ['Development'] },
  { title: 'BoomBap Audio', imgSrc: images.OF, categories: ['Marketing', 'Development', 'Design'] },
  { title: 'Van Moose', imgSrc: images.OG, categories: ['Marketing', 'Development', 'Design'] },
  { title: 'Joy Moments', imgSrc: images.OM, categories: ['Design', 'Marketing', 'SEO', 'Development'] },
  { title: 'Spark Events', imgSrc: images.OP, categories: ['Marketing', 'SEO', 'Design'] },
  { title: 'Casual Wear', imgSrc: images.OR, categories: ['Marketing', 'Design'] },
  { title: 'Zazoo Apps', imgSrc: images.OT, categories: ['Marketing', 'Design'] },
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => 
        project.categories.some(category => 
          category.toLowerCase() === selectedCategory
        )
      );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  return (
    <div className="lp_headers_section_padding" id="home">
      <section>
        <span className="section-title">PROJECTS</span>
        <br />
        <h2>Projects That We're Proud Of</h2>
        <br />
        
        <div className="category-list-container">
          <ul>
            <li>
              <button 
                className={selectedCategory === 'all' ? 'active' : ''} 
                onClick={() => handleCategoryClick('all')}
              >
                Show All
              </button>
            </li>
            <li>
              <button 
                className={selectedCategory === 'design' ? 'active' : ''} 
                onClick={() => handleCategoryClick('Design')}
              >
                Design
              </button>
            </li>
            <li>
              <button 
                className={selectedCategory === 'development' ? 'active' : ''} 
                onClick={() => handleCategoryClick('Development')}
              >
                Development
              </button>
            </li>
            <li>
              <button 
                className={selectedCategory === 'marketing' ? 'active' : ''} 
                onClick={() => handleCategoryClick('Marketing')}
              >
                Marketing
              </button>
            </li>
            <li>
              <button 
                className={selectedCategory === 'seo' ? 'active' : ''} 
                onClick={() => handleCategoryClick('SEO')}
              >
                SEO
              </button>
            </li>
          </ul>
        </div>
        
        <div className="projectListContainer">
          {filteredProjects.map((project, index) => (
            <div className='squareContainer' key={index}>
              <div className="projectItemContainer">
                <img
                  className="projectImage"
                  src={project.imgSrc}
                  alt={project.title}
                />
                <div className="projectTitle">{project.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team">
        <h3>Our Team of Consultants</h3>
        <p>
          We're only as strong and as knowledgeable as our team. 
          <br />
          So here are the men and women customers meet goals and grow companies.
        </p>
        
        <div className="team-member-container">
          <div className="square-container">
            <div className="profile-picture">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/2.jpg" alt="John Whitelong" loading="lazy" />
            </div>
          </div>
          <p>John Whitelong</p>
          <h5>General Manager</h5>
          <div className="social-links">
            <li className="icon">
              <FaFacebookF />
            </li>
            <li className="icon">
              <FaTwitter />
            </li>
          </div>
        </div>

        <div className="team-member-container">
          <div className="square-container">
            <div className="profile-picture">
              <img src="https://xsgames.co/randomusers/assets/avatars/female/77.jpg" alt="Veronica Smith" loading="lazy" />
            </div>
          </div>
          <p>Veronica Smith</p>
          <h5>Business Developer</h5>
          <div className="social-links">
            <li className="icon">
              <FaFacebookF />
            </li>
            <li className="icon">
              <FaTwitter />
            </li>
          </div>
        </div>

        <div className="team-member-container">
          <div className="square-container">
            <div className="profile-picture">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg" alt="Chris Zimerman" loading="lazy" />
            </div>
          </div>
          <p>Chris Zimerman</p>
          <h5>Online Marketer</h5>
          <div className="social-links">
            <li className="icon">
              <FaFacebookF />
            </li>
            <li className="icon">
              <FaTwitter />
            </li>
          </div>
        </div>

        <div className="team-member-container">
          <div className="square-container">
            <div className="profile-picture">
              <img src="https://xsgames.co/randomusers/assets/avatars/female/70.jpg" alt="Mary Villalonge" loading="lazy" />
            </div>
          </div>
          <p>Mary Villalonge</p>
          <h5>Community Manager</h5>
          <div className="social-links">
            <li className="icon">
              <FaFacebookF />
            </li>
            <li className="icon">
              <FaTwitter />
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;