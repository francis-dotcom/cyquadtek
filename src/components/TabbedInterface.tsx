

// import { useState } from 'react';

// export default function TabbedInterface() {
//   const [activeTab, setActiveTab] = useState(1);

//   const tabs = [
//     {
//       id: 1,
//       icon: "bi bi-cloud-fill",
//       title: "Cloud Solutions",
//       description: "Scalable infrastructure and deployment",
//       details: "Full-stack cloud engineering with focus on reliability, security, and performance optimization.",
//       color: "primary"
//     },
//     {
//       id: 2,
//       icon: "bi bi-laptop-fill",
//       title: "Web Development", 
//       description: "Modern applications and platforms",
//       details: "Custom web applications built with React, Node.js, and cutting-edge technologies.",
//       color: "success"
//     },
//     {
//       id: 3,
//       icon: "bi bi-shield-fill",
//       title: "Security",
//       description: "Protection and compliance",
//       details: "Comprehensive security audits, penetration testing, and compliance frameworks.",
//       color: "warning"
//     },
//     {
//       id: 4,
//       icon: "bi bi-graph-up-arrow",
//       title: "Consulting",
//       description: "Strategic technology guidance", 
//       details: "Expert advisory services for digital transformation and technology optimization.",
//       color: "info"
//     }
//   ];

//   const currentTab = tabs.find(tab => tab.id === activeTab);

//   return (
//     <section id="services" className="services section light-background">
//       <div className="container">
//         <div className="section-title" data-aos="fade-up">
//           <h2>Our Services</h2>
//           <p>Check Our Services</p>
//         </div>

//         {/* Tab Navigation as Cards */}
//         <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
//           {tabs.map((tab) => (
//             <div key={tab.id} className="col-lg-3 col-md-6">
//               <div 
//                 className={`card service-card h-100 border-0 cursor-pointer transition-all ${
//                   activeTab === tab.id ? 'shadow-lg transform-scale' : 'shadow-sm'
//                 }`}
//                 onClick={() => setActiveTab(tab.id)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <div className={`card-body text-center p-4 bg-${tab.color} bg-opacity-10 rounded-3`}>
//                   <i className={`${tab.icon} text-${tab.color} display-4 mb-3`} />
//                   <h5 className="card-title fw-bold">{tab.title}</h5>
//                   <p className="card-text text-muted small">{tab.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Content Display */}
//         <div className="row" data-aos="fade-up" data-aos-delay={200}>
//           <div className="col-12">
//             <div className="bg-white rounded-4 p-5 shadow-sm border">
//               <div className="row align-items-center">
//                 <div className="col-md-8">
//                   <h3 className="fw-bold text-gradient">{currentTab.title}</h3>
//                   <p className="lead text-muted mb-4">{currentTab.details}</p>
                  
//                   <div className="d-flex flex-wrap gap-3 mb-4">
//                     {['Strategy Session', 'Technical Audit', 'Custom Proposal', 'Implementation Plan'].map((item, index) => (
//                       <span key={index} className="badge bg-light text-dark px-3 py-2">
//                         <i className="bi bi-check-circle me-2" />
//                         {item}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="d-flex gap-3">
//                     <button className="btn btn-primary px-4">
//                       <i className="bi bi-chat-dots me-2" />
//                       Start Conversation
//                     </button>
//                     <button className="btn btn-outline-secondary px-4">
//                       View Case Studies
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="col-md-4 text-center">
//                   <div className={`bg-${currentTab.color} bg-opacity-10 rounded-3 p-4`}>
//                     <i className={`${currentTab.icon} text-${currentTab.color} display-1`} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .transform-scale {
//           transform: scale(1.05);
//         }
//         .cursor-pointer {
//           cursor: pointer;
//         }
//         .transition-all {
//           transition: all 0.3s ease;
//         }
//         .text-gradient {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//       `}</style>
//     </section>
//   );
// }



import { useState } from 'react';

export default function TabbedInterface() {
  const [activeTab, setActiveTab] = useState(1);


  const tabs = [
  {
    id: 1,
    icon: "bi bi-cloud-fill",
    title: "Cloud Solutions",
    description: "Scalable infrastructure and deployment",
    details: "Full-stack cloud engineering with focus on reliability, security, and performance optimization.",
    colorClass: "primary",
    image: "/assets/img/working-1.jpg"
  },
  {
    id: 2,
    icon: "bi bi-laptop-fill",
    title: "Web Development", 
    description: "Modern applications and platforms",
    details: "Custom web applications built with React, Node.js, and cutting-edge technologies.",
    colorClass: "success",
    image: "/assets/img/working-2.jpg"
  },
  {
    id: 3,
    icon: "bi bi-shield-fill",
    title: "Security",
    description: "Protection and compliance",
    details: "Comprehensive security audits, penetration testing, and compliance frameworks.",
    colorClass: "warning",
    image: "/assets/img/working-3.jpg"
  },
  {
    id: 4,
    icon: "bi bi-graph-up-arrow",
    title: "Consulting",
    description: "Strategic technology guidance", 
    details: "Expert advisory services for digital transformation and technology optimization.",
    colorClass: "info",
    image: "/assets/img/working-4.jpg"
  }
];
  

  // const tabs = [
  //   {
  //     id: 1,
  //     icon: "bi bi-cloud-fill",
  //     title: "Cloud Solutions",
  //     description: "Scalable infrastructure and deployment",
  //     details: "Full-stack cloud engineering with focus on reliability, security, and performance optimization.",
  //     colorClass: "primary"
  //   },
  //   {
  //     id: 2,
  //     icon: "bi bi-laptop-fill",
  //     title: "Web Development", 
  //     description: "Modern applications and platforms",
  //     details: "Custom web applications built with React, Node.js, and cutting-edge technologies.",
  //     colorClass: "success"
  //   },
  //   {
  //     id: 3,
  //     icon: "bi bi-shield-fill",
  //     title: "Security",
  //     description: "Protection and compliance",
  //     details: "Comprehensive security audits, penetration testing, and compliance frameworks.",
  //     colorClass: "warning"
  //   },
  //   {
  //     id: 4,
  //     icon: "bi bi-graph-up-arrow",
  //     title: "Consulting",
  //     description: "Strategic technology guidance", 
  //     details: "Expert advisory services for digital transformation and technology optimization.",
  //     colorClass: "info"
  //   }
  // ];

  // const currentTab = tabs.find(tab => tab.id === activeTab);
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="services" className="services section light-background">
      <style>{`
        .transform-scale {
          transform: scale(1.05);
        }
        .service-card {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>Check Our Services</p>
        </div>

        {/* Tab Navigation as Cards */}
        <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
          {tabs.map((tab) => (
            <div key={tab.id} className="col-lg-3 col-md-6">
              <div 
                className={`card service-card h-100 border-0 ${
                  activeTab === tab.id ? 'shadow-lg transform-scale' : 'shadow-sm'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className={`card-body text-center p-4 bg-${tab.colorClass} bg-opacity-10 rounded-3`}>
                  <i className={`${tab.icon} text-${tab.colorClass} display-4 mb-3`} />
                  <h5 className="card-title fw-bold">{tab.title}</h5>
                  <p className="card-text text-muted small">{tab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="row" data-aos="fade-up" data-aos-delay={200}>
          <div className="col-12">
            <div className="bg-white rounded-4 p-5 shadow-sm border">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h3 className="fw-bold text-gradient">{currentTab.title}</h3>
                  <p className="lead text-muted mb-4">{currentTab.details}</p>
                  
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    {['Strategy Session', 'Technical Audit', 'Custom Proposal', 'Implementation Plan'].map((item, index) => (
                      <span key={index} className="badge bg-light text-dark px-3 py-2">
                        <i className="bi bi-check-circle me-2" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-3">
                    <button className="btn btn-primary px-4">
                      <i className="bi bi-chat-dots me-2" />
                      Start Conversation
                    </button>
                    <button className="btn btn-outline-secondary px-4">
                      View Case Studies
                    </button>
                  </div>
                </div>
                
                {/* <div className="col-md-4 text-center">
                  <div className={`bg-${currentTab.colorClass} bg-opacity-10 rounded-3 p-4`}>
                    <i className={`${currentTab.icon} text-${currentTab.colorClass} display-1`} />
                  </div>
                </div> */}
                <div className="col-md-4 text-center">
                  <img 
                    src={currentTab.image} 
                    alt={currentTab.title}
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}