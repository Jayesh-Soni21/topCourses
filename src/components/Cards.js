import { useState } from "react";
import Card from "./Card";
function Cards({courses,category}){
    console.log(courses);
    const [likedCourses,setLikedCourses]=useState([])
    let allCourses=[];
    const getCourses=()=>{
        if(category==="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
       
    }


    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        { getCourses().map((course)=>{
            return <Card  key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        }) } 
      
        </div>
    );
}
export default Cards;