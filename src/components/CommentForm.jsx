import { useState } from "react";


export default function CommentForm() {
    let [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: 5
    });

    let handleChange = (event) => {
        setFormData((currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send formData to your backend or update state in a parent component
        console.log("Submitted comment:", formData);
        setFormData({
            username: "",
            comment: "",
            rating: 5
        });
        // Reset form after submission
    };


    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="Username" 
             value={formData.username}
             onChange={handleChange}
             id="username"
             name="username"/>
        <br /><br />

        <label htmlFor="comment">Comment:</label>
        <textarea placeholder="Write your comment here..." 
             value={formData.comment}
             onChange={handleChange}
             id="comment"
             name="comment"/>
        <br /><br />

        <label htmlFor="rating">Rating:</label>
        <input type="number" 
              placeholder="Rating (1-5)" 
              min={1} max={5}
              value={formData.rating} 
              onChange={handleChange}
              id="rating"
              name="rating"/>
        <br /><br /> 
        <button type="submit" >Add comment</button>
    </form>
  );
}