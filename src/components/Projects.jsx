import Card from "./Card.jsx";

const Projects = () => {
  return (
    <div className="projects-container">
      <Card
        imgUrl=""
        title="MNIST Digit Classification"
        desc={
          <>
            Python, Scikit-learn, NumPy, Matplotlib
            <br />
            Built a KNN classifier on the MNIST dataset, achieving 97% accuracy.
            <br />
            Optimized model using GridSearchCV for hyperparameter tuning and
            visualized results with Matplotlib.
          </>
        }
        githubUrl=""
      />
      <Card
        imgUrl=""
        title="Encryption & Decryption System"
        desc={
          <>
            C, MongoDB
            <br />
            Developed a CLI tool supporting Caesar, Vigenère, Atbash, and Rail
            Fence ciphers for secure message encryption/decryption.
            <br />
            Integrated MongoDB for storing encrypted messages with metadata and
            implemented robust input validation.
          </>
        }
        githubUrl=""
      />
      <Card
        imgUrl=""
        title="CIFAR-10 Image Classification"
        desc={
          <>
            Python, PyTorch
            <br />
            Trained a CNN on the CIFAR-10 dataset using PyTorch, incorporating
            data augmentation, batch normalization, and dropout to boost
            accuracy.
            <br />
            Analyzed performance with a confusion matrix and feature map
            visualizations.
          </>
        }
        githubUrl=""
      />
      <Card
        imgUrl=""
        title="Linear Regression from Scratch"
        desc={
          <>
            Python, NumPy
            <br />
            Implemented linear regression from the ground up using only NumPy.
            <br />
            Derived and minimized the cost function via gradient descent, and
            visualized model performance with Matplotlib to demonstrate fitting
            accuracy.
          </>
        }
        githubUrl=""
      />
      <Card
        imgUrl=""
        title="CRUD API for Product Page"
        desc={
          <>
            Node.js, Express.js, MongoDB, Insomnia
            <br />
            Built a RESTful API for product management with full CRUD
            functionality using Express.js.
            <br />
            Connected to MongoDB for persistent data storage and tested
            endpoints using Insomnia.
          </>
        }
        githubUrl=""
      />
      <Card
        imgUrl=""
        title="Task Manager App"
        desc={
          <>
            React.js, TypeScript, Node.js, Express.js, MongoDB
            <br />
            Developed a full-stack task management system with React.js and
            TypeScript for the frontend.
            <br />
            Designed RESTful APIs with Node.js and Express.js and integrated
            MongoDB for reliable backend data handling.
          </>
        }
        githubUrl=""
      />
      <Card
        imgUrl=""
        title="Titanic Dataset Analysis"
        desc={
          <>
            Python, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn
            <br />
            Conducted in-depth exploratory data analysis to identify survival
            trends.
            <br />
            Engineered features and addressed missing data to boost model
            performance, achieving 87% accuracy using GridSearchCV-tuned
            classifiers.
          </>
        }
        githubUrl=""
      />
    </div>
  );
};

export default Projects;
