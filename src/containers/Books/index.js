/* eslint-disable */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses } from '../../Actions/coursesAction'
import { getAuthors } from '../../Actions/authorsAction'

class Books extends Component {
  constructor(props) {
    super(props);
    props.loadCourses();
    props.loadAuthors();
  }

  getAuthorDetail = (authorId) => {
    const { data } = this.props.authors;
    const author = data.filter(x => x.id === authorId);
    if(author[0]){
    return `${author[0].firstName} ${author[0].lastName}`
    }
    //  return '';
  }
  

  render() {
    const {loading: coursesLoad, error: coursesError, data: courses} = this.props.courses;
    
    if(coursesLoad) {
      return <h1>Loading...</h1>
    }
    if(coursesError) {
      return <h1>Oops! something went wrong</h1>
    }
    return <div>
      <table>
        <thead>
          <tr>
            <th>
            title
            </th>
            <th>
            Link
            </th>
            <th>
            Author
            </th>
            <th>
            length
            </th>
            <th>
            category
            </th>
            <th></th>
          </tr>
        </thead>
      <tbody>
        {
          courses.map(course => <tr key={course.id}>
            <td>{course.title}</td>
            <td>{<a href={course.watchHref}>Link</a> }</td>
            <td>{this.getAuthorDetail(course.authorId)}</td>
            <td>{course.length}</td>
            <td>{course.category}</td>
            <td></td>
          </tr>)
        }
      </tbody>
      </table>
    </div>;
  }
}

Books.propTypes = {};

function mapStateToProps(state) {
  return {
    courses: state.course,
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCourses: () => getCourses()(dispatch),
    loadAuthors: () => getAuthors()(dispatch)
    // actions: bindActionCreators(PropertiesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
