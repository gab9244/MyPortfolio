export const Projects = () => {
  return (
    <div id="Projects">
      <section>
        <a href="https://theblog-api.onrender.com" target="_blank">
          <img
            src="/MyPortfolio/myblog-print-2.png"
            alt="A Battleship screenshot"
          />
        </a>
        <p className="paragraph">
          The site offers a simple blog creation experience, where you can
          create your own account, log in and create your own pages, as well as
          edit and delete them.
          <p>This project was my first  mern(mongoose, express, React, Node) project and without a doubt it was the most challenging one so far.</p>
           <span className="negrito">technologies</span>: React JS, TypeScript, Node, 
          Express, JavaScript, HTML e CSS
        </p>
      </section>

      <section>
        <a href="https://task-manager-q6ci.onrender.com/" target="_blank">
          <img
            src="/MyPortfolio/taskmanager-printe.png"
            alt="A MultiStepForm screenshot"
          />
        </a>
        <p className="paragraph">
         <p>Here is a task manager project, where you can create your own account, login in it , create your own tasks, complete and delete them.</p>
         <p>With this project, I learned how to better use routes and MongoDB collections. Specifically, I used three collections: one for tasks, one for users, and one for completed tasks.</p>
          <p><span className="negrito">technologies</span>: React, JSX, TypeScript, Node, Express, MongoDB, Mongoose</p>
        </p>
      </section>

      <section>
        <a href="https://gab9244.github.io/MemoryGame/" target="_blank">
          <img
            src="/MyPortfolio/memoryGame.png"
            alt="A Memory game screenshot"
          />
        </a>
        <p className="paragraph">
          This one was a good practice of my array skills because I used map and
          sort methods in it, and I learned how to use useEffect with this
          project.
        </p>
      </section>
      <a href="https://github.com/gab9244" target="_blank" id="More">
        More
      </a>
    </div>
  );
};
