

// import React from "react";

// // Badge type
// type Badge = {
//   label: string;
//   icon: string;
//   color: string; // bootstrap bg color suffix
// };

// type TeamMember = {
//   initials: string;
//   name: string;
//   role: string;
//   description: string;
//   badges: Badge[];
//   circleBg?: string;
// };

// // Bootstrap icon mapping
// const iconClassMap: Record<string, string> = {
//   cloud: "bi-cloud-fill",
//   gear: "bi-gear-fill",
//   shield: "bi-shield-lock-fill",
//   code: "bi-code-slash",
//   apple: "bi-apple",
//   lock: "bi-lock-fill",
//   terminal: "bi-terminal-dash",
//   star: "bi-star-fill",
//   check: "bi-check2-circle",
//   architect: "bi-diagram-3",
//   backend: "bi-server",
// };

// // Team data
// const teamMembers: TeamMember[] = [
//   {
//     initials: "FO",
//     name: "Francis O",
//     role: "Full Stack Cloud Engineer",
//     description:
//       "Expert in cloud-native architecture and enterprise software delivery. Passionate about building scalable and secure solutions.",
//     badges: [
//       { label: "MultiCloud", icon: "cloud", color: "primary" },
//       { label: "Backend Engineer", icon: "backend", color: "warning" },
//       { label: "Architect", icon: "architect", color: "success" },

  
//     ],
//     circleBg: "primary",
//   },
//   {
//     initials: "KW",
//     name: "Karena Williams",
//     role: "Mobile Developer",
//     description:
//       "Skilled mobile developer delivering modern, user-friendly apps across Android and iOS ecosystems.",
//     badges: [
//       { label: "React Native", icon: "code", color: "info" },
//       { label: "iOS", icon: "apple", color: "dark" },
//     ],
//     circleBg: "secondary",
//   },
//   {
//     initials: "MT",
//     name: "Micheal Thomas",
//     role: "CyberSecurity Expert",
//     description:
//       "Focused on securing enterprise environments with expertise in penetration testing and compliance frameworks.",
//     badges: [
//       { label: "Security", icon: "shield", color: "danger" },
//       { label: "Compliance", icon: "check", color: "success" },
//       { label: "PenTesting", icon: "lock", color: "secondary" },
//     ],
//     circleBg: "dark",
//   },
// ];

// const TeamSection: React.FC = () => {
//   return (
//     <section id="team" className="team section light-background">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Team</h2>
//         <p>CHECK OUR TEAM</p>
//       </div>

//       <div className="container">
//         <div className="row gy-5">
//           {teamMembers.map((m, idx) => (
//             <div
//               key={idx}
//               className="col-lg-4 col-md-6"
//               data-aos="fade-up"
//               data-aos-delay={100 * (idx + 1)}
//             >
//               <div className="member p-4 bg-white rounded-3 shadow-sm h-100 text-center">
//                 {/* Initials Circle */}
//                 <div className="d-flex justify-content-center mb-3">
//                   <div
//                     className={`rounded-circle bg-${m.circleBg ?? "primary"} text-white fw-bold d-flex align-items-center justify-content-center`}
//                     style={{ width: 72, height: 72, fontSize: 22 }}
//                   >
//                     {m.initials}
//                   </div>
//                 </div>

//                 {/* Name & Role */}
//                 <h4 className="mb-1">{m.name}</h4>
//                 <span className="text-muted d-block mb-2">{m.role}</span>

//                 {/* Compact Colored Badges */}
//                 <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
//                   {m.badges.map((b, i) => (
//                     <span
//                       key={i}
//                       className={`badge rounded-pill bg-${b.color} d-inline-flex align-items-center gap-1`}
//                       style={{
//                         fontSize: "0.8rem",
//                         padding: "4px 8px",
//                         maxWidth: "120px",
//                       }}
//                     >
//                       <i className={`bi ${iconClassMap[b.icon]}`} />
//                       <span className="text-truncate">{b.label}</span>
//                     </span>
//                   ))}
//                 </div>

//                 {/* Description */}
//                 <p className="small fst-italic">{m.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;


import { useState, useEffect } from "react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
};

const team: TeamMember[] = [
  {
  id: 1,
  name: "Francis O.",
  role: "Full-Stack Cloud & AI Engineer",
  bio: "Francis is a multidisciplinary engineer skilled in front-end, back-end, and cloud-native development. With expertise in React, Node.js, and Python, he builds scalable digital solutions while leveraging AI and machine learning to deliver intelligent, data-driven applications."
  },

  {
  id: 2,
  name: "Jane D.",
  role: "UI/UX Designer & Mobile Developer",
  bio: "Jane blends creative design with technical expertise, crafting intuitive, human-centered interfaces and developing robust mobile applications for iOS and Android. With a strong focus on accessibility and seamless user journeys, she bridges the gap between design and development to deliver exceptional mobile experiences."
  },
  {
    id: 3,
    name: "Michael T.",
    role: "Project Manager",
    bio: "Michael brings over 10 years of experience in agile project management and risk management for enterprise IT solutions.",
  },
];

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 992);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Get initials
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <section id="team" className="team section light-background">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Team</h2>
          <p>Our dedicated professionals</p>
        </div>

        {/* Desktop view (inline bios with initials only) */}
        {!isMobile && (
          <div className="row gy-4">
            {team.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 p-3 d-flex flex-column align-items-start">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar-circle me-3">
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">{member.name}</h5>
                      <small className="text-primary">{member.role}</small>
                    </div>
                  </div>
                  <p className="text-muted small">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile view (strips with initials → modal for bio) */}
        {isMobile && (
          <div className="list-group">
            {team.map((member) => (
              <button
                key={member.id}
                className="list-group-item list-group-item-action d-flex align-items-center"
                onClick={() => setActiveMember(member)}
              >
                <div className="avatar-circle me-3">
                  {getInitials(member.name)}
                </div>
                <div className="d-flex flex-column text-start">
                  <span className="fw-bold">{member.name}</span>
                  <small className="text-muted">{member.role}</small>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Modal for mobile */}
        {isMobile && activeMember && (
          <div
            className="modal-backdrop-custom"
            onClick={() => setActiveMember(null)}
          >
            <div
              className="modal-content p-4 rounded-4 shadow bg-white"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "90%" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">{activeMember.name}</h5>
                <button
                  className="btn-close"
                  onClick={() => setActiveMember(null)}
                />
              </div>
              <p className="text-primary fw-semibold">{activeMember.role}</p>
              <p className="text-muted">{activeMember.bio}</p>
            </div>
          </div>
        )}
      </div>

      {/* Styling */}
      <style>{`
        .avatar-circle {
          width: 45px;
          height: 45px;
          background: #007bff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 16px;
        }
        .modal-backdrop-custom {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          padding: 1rem;
        }
      `}</style>
    </section>
  );
}
