import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {

    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const fetchCourses = () => {
        axios.get('http://localhost:4000/course')
            .then((res) => setCourses(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/course/${id}`)
            .then(() => setCourses(courses.filter((c) => c._id !== id)))
            .catch((err) => console.log(err))
    }

    // Bonus: one search box matches against name / instructor / category / level
    const term = search.toLowerCase()
    const filteredCourses = courses.filter((c) =>
        c.courseName.toLowerCase().includes(term) ||
        c.instructor.toLowerCase().includes(term) ||
        c.category.toLowerCase().includes(term) ||
        c.level.toLowerCase().includes(term)
    )

    return (
        <>
            <div className="container">
                {/* Bootstrap's default navbar search form, used here to filter by name/instructor/category/level */}
                <form
                    className="d-flex mt-3 mb-4"
                    role="search"
                    onSubmit={ (e) => e.preventDefault() }
                >
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search by Course Name, Instructor, Category or Level"
                        aria-label="Search"
                        value={ search }
                        onChange={ (e) => setSearch(e.target.value) }
                    />
                    <button className="btn btn-outline-success" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </form>

                <div className="row justify-content-center g-3">
                    {
                        filteredCourses.map((course) => (
                            <div className="col-md-4" key={ course._id }>
                                <div className="card h-100">
                                    <img
                                        className="card-img-top"
                                        src={ course.thumbnail }
                                        alt={ course.courseName }
                                        style={ { height: '160px', objectFit: 'cover' } }
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{ course.courseName }</h5>
                                        <p className="card-text mb-1"><strong>Instructor:</strong> { course.instructor }</p>
                                        <p className="card-text mb-1"><strong>Category:</strong> { course.category }</p>
                                        <p className="card-text mb-1"><strong>Duration:</strong> { course.duration } hrs</p>
                                        <p className="card-text mb-2"><strong>Level:</strong> { course.level }</p>

                                        <NavLink
                                            className="btn btn-primary btn-sm me-2"
                                            to={ `/${course._id}` }
                                            role="button"
                                        >View</NavLink>
                                        <NavLink
                                            className="btn btn-warning btn-sm me-2"
                                            to={ `/edit/${course._id}` }
                                            role="button"
                                        >Edit</NavLink>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={ () => handleDelete(course._id) }
                                        >Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        filteredCourses.length === 0 &&
                        <p className="text-center text-muted mt-4">No courses found.</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Home
