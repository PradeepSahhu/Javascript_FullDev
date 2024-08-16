// destructuring objects.

const course = {
  courseName: "Js course",
  price: "999",
  courseInstructor: "Pradeep sahu",
};

// console.log(course.courseInstructor);
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
// console.log(instructor);

// how is it usedful in react ( object destructuring)

// const Navbar = ({ companyName, IceCream }) => {
//   console.log(companyName, IceCream);
// };

// Navbar((companyName = "Sugar Daddy"), (IceCream = "chocholate"));

// array destructuring

const arrs = [1, 2, 3];

const [newNumber, everyNumber] = [...arrs];
// console.log(newNumber);
// console.log(everyNumber);
// console.log(nextNumber);

//JSON format

// {
//   "name": "Pradeep Sahu",
//   "price":"999",
//   "course":"JavaScript"
// }

// [{}, {}, {}];
