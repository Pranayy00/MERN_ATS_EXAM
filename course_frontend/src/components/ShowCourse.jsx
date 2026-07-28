import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

const ShowCourse = () => {

    const [course, setCourse] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/course/course/${id}`)
            .then((res) => setCourse(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/course/${id}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center g-2">
                    <div className="col-md-6">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={ course.thumbnail }
                                alt={ course.courseName }
                                style={ { maxHeight: '260px', objectFit: 'cover' } }
                            />
                            <div className="card-body">
                                <h4 className="card-title">{ course.courseName }</h4>
                                <p className="card-text mb-1"><strong>Instructor:</strong> { course.instructor }</p>
                                <p className="card-text mb-1"><strong>Category:</strong> { course.category }</p>
                                <p className="card-text mb-1"><strong>Duration:</strong> { course.duration } hrs</p>
                                <p className="card-text mb-3"><strong>Level:</strong> { course.level }</p>

                                <NavLink
                                    className="btn btn-secondary me-2"
                                    to="/"
                                    role="button"
                                >Back to Home</NavLink>
                                <NavLink
                                    className="btn btn-warning me-2"
                                    to={ `/edit/${id}` }
                                    role="button"
                                >Edit</NavLink>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={ handleDelete }
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowCourse
