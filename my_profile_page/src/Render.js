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
        <p>Above for info...or below for projects...</p>
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
              Upon course completion, I've gained expertise in teamwork,
              problem-solving, mindset, and planning. Engaging in collaborative
              projects, I utilized Agile methodologies, such as sprints, Kanban
              planning, and retrospectives. I excelled in breaking down complex
              problems through kata exercises, tutorials, and hands-on projects.
              Embracing a growth mindset, I sought challenges, learned from
              failures, and prioritized meticulous planning for optimized team
              focus and meeting deadlines.
            </p>
          </div>
          <br />
          <div>
            <p>IT CAREER SWITCH – January to December 2022 (part-time)</p>
            <p>IT TECH TRAINEESHIP</p>
          </div>
          <div>
            <p>
              After this course I have experienced how to troubleshoot hardware,
              software, network devices, printers, and servers. Proficient in
              implementing network security, server configuration, and managing
              standards and protocols. Explored functional network design,
              firewall configuration, and OS migration. CompTIA A+ certified for
              hardware and software troubleshooting.
            </p>
          </div>
          <br />
          <div>
            <p>MACKWELL – November 2021 to January 2023</p>
            <p>BUSINESS DEVELOPMENT MANAGER</p>
          </div>
          <div>
            <p>
              Managed OEM accounts in England & Northern Ireland, providing
              project support and training. Secured £2m in business,
              representing 25% company revenue increase. Collaborated on product
              design and launch. Provided on-site troubleshooting and support
              during project implementation.
            </p>
          </div>
          <br />
          <div>
            <p>HELVAR – July 2018 to November 2021</p>
            <p>SALES MANAGER</p>
          </div>
          <div>
            <p>
              Managed £1.5m for key accounts, supporting sales and technical
              teams. Conducted training sessions for internal and external
              audiences, showcasing new technology. Collaborated across teams,
              including third-party contractors, for successful project
              execution. Employed critical thinking for contract, pricing, and
              project management, emphasizing business relationships and
              conflict resolution.
            </p>
          </div>
          <br />
          <div>
            <p>ZUMTOBEL GROUP – September 2016 to July 2018</p>
            <p>SYSTEM SPECIALIST</p>
          </div>
          <div>
            <p>
              Supported teams through tech demos & lighting system design. Found
              innovative solutions by thinking creatively. Organized projects
              with technical schematics, estimates, and plans. Effective
              communication with diverse teams and potential customers.
            </p>
          </div>
          <br />
          <div>
            <p>PROLOJIK – June 2015 to September 2016</p>
            <p>ACCOUNT MANAGER</p>
          </div>
          <div>
            <p>
              Fostered partnerships with companies, aligning customer needs with
              innovative products. Exhibited strong organisation and discipline
              in customer relationship management. Strategically coordinated and
              organized successful product-focused seminars.
            </p>
          </div>
          <br />
          <div>
            <p>LED GROUP ROBUS – September 2011 to February 2013</p>
            <p>AREA SALES MANAGER</p>
          </div>
          <div>
            <p>
              Managed UK region with 79 accounts, handling purchases and issue
              resolution. Supported team members and account sales teams for
              smooth operations. Adapted flexibly to economic strains, difficult
              customers, and changing products. Maintained projects and customer
              base despite company challenges.
            </p>
          </div>
        </ul>
      </div>
    );
  }
}
