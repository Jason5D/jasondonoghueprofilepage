export default function Render({
  aboutMe,
  skills,
  hobbies,
  education,
  experience,
}) {
  if (
    aboutMe === null &&
    skills === null &&
    hobbies === null &&
    education === null &&
    experience === null
  ) {
    return (
      <div className="render">
        <p>Choose from above...</p>
      </div>
    );
  } else if (aboutMe !== null) {
    return (
      <div className="render">
        <ul>
          <p>
            With a strong background in supplying lighting technology to the
            construction industry, Ive witnessed the transformative power of
            technology first-hand, igniting my passion for being a change
            catalyst. My true passion lies in coding, which led me to enrol in
            the School of Codes intensive bootcamp. There, I honed my
            problem-solving skills and discovered programming has ability to
            drive innovation. Now, driven to make a tangible impact, I actively
            participate in tech meetups, eager to support newcomers in
            navigating the dynamic and ever-evolving field of technology.
          </p>
        </ul>
      </div>
    );
  } else if (skills !== null) {
    return (
      <div className="render">
        <ul>
          <p>
            HTML | CSS | Git | GitHub | REST API | SQL | Jest | Playwright |
            JavaScript | Typescript | Express React | Agile | Prince 2 | Windows
            Server 2016 | Active Directory | PowerShell | VMware | Vite | Node
          </p>
        </ul>
      </div>
    );
  } else if (hobbies !== null) {
    return (
      <div className="render">
        <ul>
          <p>Chess: Played for England in my youth</p>
          <p>Skiing: Reached a level to teach young children</p>
          <p>Trombone: Enjoyed playing in brass and wind bands</p>
          <p>Home DJ: Entertained me and annoyed my neighbours</p>
          <p>Beach Volleyball: Play mostly during the summer</p>
        </ul>
      </div>
    );
  } else if (education !== null) {
    return (
      <div className="render">
        <ul>
          <p>2023: AWS Practitioner</p>
          <p>2022: CompTIA A+ / 220 1101 + 1102</p>
          <p>2019: PRINCE 2 certification</p>
          <p>2018: Certified Associate in Project Management</p>
          <p>2011: BA Degree in Business Management & Sports</p>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="render">
        <ul>
          <div>
            <p>SCHOOL OF CODE – March to July 2023</p>
            <p>FULL-STACK DEVELOPMENT BOOTCAMP</p>
          </div>
          <div>
            <p>
              Teamwork: Daily collaboration with diverse teams. Agile
              methodology with sprints, Kanban planning, & retros.
            </p>
            <p>
              Problem solving: Developed strong ability to break down
              challenging problems through kata’s, tutorials & projects.
            </p>
            <p>
              Mindset: Emphasised growth mindset, seeking challenges, embracing
              failure, and continuous improvement.
            </p>
            <p>
              Planning: Prioritised planning, establishing purpose, and best
              practices to optimise team focus to hit deadlines.
            </p>
          </div>
          <br />
          <div>
            <p>IT CAREER SWITCH – January to December 2022 (part-time)</p>
            <p>IT TECH TRAINEESHIP</p>
          </div>
          <div>
            <p>
              Troubleshooting: Hardware & software, network devices, printers,
              servers.
            </p>
            <p>
              Implementation: Network security, server configuration, standards
              & protocols management.
            </p>
            <p>
              Infrastructure: Functional network design, firewall configuration,
              OS migration.
            </p>
            <p>
              Certification: CompTIA A+ qualified in hardware & software
              troubleshooting.
            </p>
          </div>
          <br />
          <div>
            <p>MACKWELL – November 2021 to January 2023</p>
            <p>BUSINESS DEVELOPMENT MANAGER</p>
          </div>
          <div>
            <p>
              Responsibility: Account management of the OEM customer base in
              England & NI, project support and training.
            </p>
            <p>
              Commercials: Secured £2m business, 25% of company total, increase
              from last year.
            </p>
            <p>
              Product design: Collaborated across all levels for product
              development & new product launch.
            </p>
            <p>
              Site support: Troubleshooting & fixing issues in project
              implementation & technology setup.
            </p>
          </div>
          <br />
          <div>
            <p>HELVAR – July 2018 to November 2021</p>
            <p>SALES MANAGER</p>
          </div>
          <div>
            <p>
              Commercials: Oversaw £1.5m for key accounts, supporting sales and
              technical support teams.
            </p>
            <p>
              Training: Conducted internal and customer/industry training
              sessions, showcasing, and explaining new technology.
            </p>
            <p>
              Cooperation: Collaborated across teams and departments, including
              third-party contractors for large projects.
            </p>
            <p>
              Critical thinking – Employed strategic thinking for contract,
              pricing, and project management, emphasising business
              relationships, conflict resolution and key relationship
              management.
            </p>
          </div>
          <br />
          <div>
            <p>ZUMTOBEL GROUP – September 2016 to July 2018</p>
            <p>SYSTEM SPECIALIST</p>
          </div>
          <div>
            <p>
              Partnerships: Supported different teams within the company through
              tech demo’s & designing lighting systems.
            </p>
            <p>
              Innovating ideas: Found solutions for unsolved problems by
              thinking creatively & developing new approaches.
            </p>
            <p>
              Organising projects: Created technical schematics, estimates &
              project plans to ensure timely delivery of objectives.
            </p>
            <p>
              Communication – Presented & collaborated with diverse teams,
              engaging potential customers to discuss technology.
            </p>
          </div>
          <br />
          <div>
            <p>PROLOJIK – June 2015 to September 2016</p>
            <p>ACCOUNT MANAGER</p>
          </div>
          <div>
            <p>
              Teamwork: Fostered partnerships with multiple companies to achieve
              shared goals and mutual success.
            </p>
            <p>
              Business Development: Cultivated relationships with key customers,
              aligning their needs with innovative products.
            </p>
            <p>
              Disciplined: Exhibited strong organisation skills &
              self-discipline in managing customer relationships.
            </p>
            <p>
              Planning: Strategically coordinated product-focused seminars,
              meticulously organising all aspects of the event.
            </p>
          </div>
          <br />
          <div>
            <p>LED GROUP ROBUS – September 2011 to February 2013</p>
            <p>AREA SALES MANAGER</p>
          </div>
          <div>
            <p>
              Management: Across a region of the UK was responsible for 79
              accounts, the products purchased and any issues.
            </p>
            <p>
              Support: Assisted team members and account sales teams, ensuring
              smooth operations.
            </p>
            <p>
              Flexible attitude: Adapted to economic strains, difficult
              customers, and changing products.
            </p>
            <p>
              Determination: Maintained projects and customer base despite
              company challenges.
            </p>
          </div>
        </ul>
      </div>
    );
  }
}
