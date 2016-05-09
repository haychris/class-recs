(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var semesterCount = 0;

/**************************************************
 * Reveals a semester div on courseHistInput.html *
 * Disables itself after being clicked twice      *
 **************************************************/
var AddSemester = React.createClass({displayName: "AddSemester",
  appendSemester: function(event) {
    if (semesterCount == 0) {
      document.getElementById('sophomoreYear').setAttribute("style", "");
      document.getElementById('deleteSemester').setAttribute("style", "");
      document.getElementById('disabledDelete').setAttribute("style", "display: none");
    }
    else if (semesterCount == 1) {
      document.getElementById('juniorYear').setAttribute("style", "");
      document.getElementById('addSemester').setAttribute("style", "display: none");
      document.getElementById('disabledAdd').setAttribute("style", "");
    }

    semesterCount++;

    return;
  },
  render: function() {
    return (
      React.createElement("div", {id: "addSemesterButton", className: "addDelete", onClick: this.appendSemester}, "Add")
    );
  }
});

/************************************************
 * Hides a semester div on courseHistInput.html *
 * Disables itself after being clicked twice    *
 ************************************************/
var DeleteSemester = React.createClass({displayName: "DeleteSemester",
  removeSemester: function() {
    if (semesterCount == 2) {
      document.getElementById('juniorYear').setAttribute("style", "display: none");
      document.getElementById('addSemester').setAttribute("style", "");
      document.getElementById('disabledAdd').setAttribute("style", "display: none");

      var deletedCourses = document.getElementById('juniorYear').getElementsByClassName("courseName");
      for (var i = 0; i < deletedCourses.length; i++)
        deletedCourses[i].value = "";
    }
    else if (semesterCount == 1) {
      document.getElementById('sophomoreYear').setAttribute("style", "display: none");
      document.getElementById('deleteSemester').setAttribute("style", "display: none");
      document.getElementById('disabledDelete').setAttribute("style", "");

      var deletedCourses = document.getElementById('sophomoreYear').getElementsByClassName("courseName");
      for (var i = 0; i < deletedCourses.length; i++)
        deletedCourses[i].value = "";
    }

    semesterCount--;

    return;
  },
  render: function() {
    return (
      React.createElement("div", {id: "deleteSemesterButton", className: "addDelete", onClick: this.removeSemester}, "Remove")
    );
  }
});

/*****************************************************************************
Returns a courseEntry div equivalent to:

  <div class="courseEntry">
    <div class="courseName">
        <input id="FF1N" class="courseName" type="text" placeholder="Course {{number}}"/>
    </div>

    <div class="courseRating">
      <div id="FF1S" class="slider"></div>
    </div>
    
    <div id="FF1R" class="showRating">OK</div>
  </div>
 *****************************************************************************/
/*function genCourseEntry(semester, count) {
  var entry = document.createElement("div");
  entry.setAttribute("class", "courseEntry");
  var courseName = entry.appendChild(document.createElement("div"));
  var courseRating = entry.appendChild(document.createElement("div"));
  var showRating = entry.appendChild(document.createElement("div"));

  courseName.setAttribute("class", "courseName");
  var inputField = courseName.appendChild(document.createElement("input"));
  inputField.setAttribute("class", "courseName");
  inputField.type = "text";
  inputField.placeholder = "Course " + count;
  inputField.id = semester + count + "N";

  courseRating.setAttribute("class", "courseRating");
  var slider = courseRating.appendChild(document.createElement("div"));
  slider.setAttribute("class", "slider");
  slider.id = semester + count + "S";

  showRating.id = semester + count + "R";
  showRating.setAttribute("class", "showRating");
  showRating.innerHTML = threeRating;
  return entry;
}
*/
/***************************************************************************
 * Adds a course entry field with ratings slider to FRESHMAN FALL semester *
 * Button disabled after there are 7 courses                               *
 ***************************************************************************/
/*var AddCourseFF = React.createClass({
  getInitialState: function() {
    return{clickCount: 5};
  },
  appendCourse: function(event) {
    this.setState(function(previousState, currentProps) {
      return {clickCount: previousState.clickCount + 1};
    });
    var entry = genCourseEntry("FF", this.state.clickCount);
    document.getElementById('appendFF').appendChild(entry);
    showSlider("FF"+this.state.clickCount+"S");
  },
  render: function () {
    if (this.state.clickCount > 7) {
      document.getElementById('FFAddButton').removeAttribute("class");
      return null;
    }
    else return (
      <div onClick={this.appendCourse}>Add course</div>
    );
  }
});*/
var AddCourseFF = React.createClass({displayName: "AddCourseFF",
  getInitialState: function() {
    return{clickCount: 5};
  },
  appendCourse: function(event) {
    this.setState(function(previousState, currentProps) {
      return {clickCount: previousState.clickCount + 1};
    });

    var id = "FF" + this.state.clickCount + "N";
    document.getElementById(id).parentNode.parentNode.style = "";
  },
  render: function () {
    if (this.state.clickCount > 7) {
      document.getElementById('FFAddButton').removeAttribute("class");
      return null;
    }
    else return (
      React.createElement("div", {onClick: this.appendCourse}, "Add course")
    );
  }
});

/*****************************************************************************
 * Adds a course entry field with ratings slider to FRESHMAN SPRING semester *
 * Button disabled after there are 7 courses                                 *
 *****************************************************************************/
var AddCourseFS = React.createClass({displayName: "AddCourseFS",
  getInitialState: function() {
    return{clickCount: 5};
  },
  appendCourse: function(event) {
    this.setState(function(previousState, currentProps) {
      return {clickCount: previousState.clickCount + 1};
    });

    var id = "FS" + this.state.clickCount + "N";
    document.getElementById(id).parentNode.parentNode.style = "";
  },
  render: function () {
    if (this.state.clickCount > 7) {
      document.getElementById('FSAddButton').removeAttribute("class");
      return null;
    }
    else return (
      React.createElement("div", {onClick: this.appendCourse}, "Add course")
    );
  }
});

/****************************************************************************
 * Adds a course entry field with ratings slider to SOPHOMORE FALL semester *
 * Button disabled after there are 7 courses                                *
 ****************************************************************************/
var AddCourseSF = React.createClass({displayName: "AddCourseSF",
  getInitialState: function() {
    return{clickCount: 5};
  },
  appendCourse: function(event) {
    this.setState(function(previousState, currentProps) {
      return {clickCount: previousState.clickCount + 1};
    });

    var id = "SF" + this.state.clickCount + "N";
    document.getElementById(id).parentNode.parentNode.style = "";
  },
  render: function () {
    if (this.state.clickCount > 7) {
      document.getElementById('SFAddButton').removeAttribute("class");
      return null;
    }
    else return (
      React.createElement("div", {onClick: this.appendCourse}, "Add course")
    );
  }
});

/******************************************************************************
 * Adds a course entry field with ratings slider to SOPHOMORE SPRING semester *
 * Button disabled after there are 7 courses                                  *
 ******************************************************************************/
var AddCourseSS = React.createClass({displayName: "AddCourseSS",
  getInitialState: function() {
    return{clickCount: 5};
  },
  appendCourse: function(event) {
    this.setState(function(previousState, currentProps) {
      return {clickCount: previousState.clickCount + 1};
    });

    var id = "SS" + this.state.clickCount + "N";
    document.getElementById(id).parentNode.parentNode.style = "";
  },
  render: function () {
    if (this.state.clickCount > 7) {
      document.getElementById('SSAddButton').removeAttribute("class");
      return null;
    }
    else return (
      React.createElement("div", {onClick: this.appendCourse}, "Add course")
    );
  }
});

/**************************************************************************
 * Adds a course entry field with ratings slider to  JUNIOR FALL semester *
 * Button disabled after there are 7 courses                              *
 **************************************************************************/
var AddCourseJF = React.createClass({displayName: "AddCourseJF",
  getInitialState: function() {
    return{clickCount: 5};
  },
  appendCourse: function(event) {
    this.setState(function(previousState, currentProps) {
      return {clickCount: previousState.clickCount + 1};
    });

    var id = "JF" + this.state.clickCount + "N";
    document.getElementById(id).parentNode.parentNode.style = "";
  },
  render: function () {
    if (this.state.clickCount > 7) {
      document.getElementById('JFAddButton').removeAttribute("class");
      return null;
    }
    else return (
      React.createElement("div", {onClick: this.appendCourse}, "Add course")
    );
  }
});

/***************************************************************************
 * Adds a course entry field with ratings slider to JUNIOR SPRING semester *
 * Button disabled after there are 7 courses                               *
 ***************************************************************************/
var AddCourseJS = React.createClass({displayName: "AddCourseJS",
  getInitialState: function() {
    return{clickCount: 5};
  },
  appendCourse: function(event) {
    this.setState(function(previousState, currentProps) {
      return {clickCount: previousState.clickCount + 1};
    });

    var id = "JS" + this.state.clickCount + "N";
    document.getElementById(id).parentNode.parentNode.style = "";
  },
  render: function () {
    if (this.state.clickCount > 7) {
      document.getElementById('JSAddButton').removeAttribute("class");
      return null;
    }
    else return (
      React.createElement("div", {onClick: this.appendCourse}, "Add course")
    );
  }
});

/**************************************************
 * Skips the course input page if a cookie exists *
 **************************************************/
var GetRecommendations = React.createClass({displayName: "GetRecommendations",
  processCourseData: function() {
    saveToCookie();
    window.location= 'recommend';
    return;
  },
  render: function() {
    return (
      React.createElement("div", {id: "getRecommendationsButtonStyle", onClick: this.processCourseData}, 
        "Inspire"
      )
    );
  }
});

/*******************************************
 * Parses the cookie and loads course info *
 *******************************************/
function getCookie(ff, fs, sf, ss, jf, js, add) {
  var cookie = document.cookie.split(";")[0];

  if (cookie != "") {
    var cookieData = cookie.split("=")[1].split("|");

    for (var i = 0; i < cookieData.length; i++) {
      var courseNameID = cookieData[i].split(",")[0].split(":")[0];
      var courseRatingID = courseNameID.substring(0,3) + "S";
      var courseName = cookieData[i].split(",")[0].split(":")[1];
      var courseRating = cookieData[i].split(",")[1].split(":")[1];

      document.getElementById(courseNameID).value = courseName;
      updateSlider(courseNameID.substring(0,3), courseRating);

      var courseNum = parseInt(courseNameID.charAt(2));
      if (courseNum > 4) {
        var semester = courseNameID.substring(0,2);

        for (var j = 5; j <= courseNum; j++)
          document.getElementById(semester+j+"N").parentNode.parentNode.style = "";

        if (semester == "FF")
          ff.setState({clickCount: courseNum+1});
        else if (semester == "FS")
          fs.setState({clickCount: courseNum+1});
        else if (semester == "SF")
          sf.setState({clickCount: courseNum+1});
        else if (semester == "SS")
          ss.setState({clickCount: courseNum+1});
        else if (semester == "JF")
          jf.setState({clickCount: courseNum+1});
        else if (semester == "JS")
          js.setState({clickCount: courseNum+1});
        else
          console.log("ERROR SETTING STATE");
      }
    }
  }
}

var add = ReactDOM.render(React.createElement(AddSemester, null), document.getElementById('addSemester'));
ReactDOM.render(React.createElement(DeleteSemester, null), document.getElementById('deleteSemester'));
ReactDOM.render(React.createElement(GetRecommendations, null), document.getElementById('getRecommendationsButton'));
var ff = ReactDOM.render(React.createElement(AddCourseFF, null), document.getElementById('FFAddButton'));
var fs = ReactDOM.render(React.createElement(AddCourseFS, null), document.getElementById('FSAddButton'));
var sf = ReactDOM.render(React.createElement(AddCourseSF, null), document.getElementById('SFAddButton'));
var ss = ReactDOM.render(React.createElement(AddCourseSS, null), document.getElementById('SSAddButton'));
var jf = ReactDOM.render(React.createElement(AddCourseJF, null), document.getElementById('JFAddButton'));
var js = ReactDOM.render(React.createElement(AddCourseJS, null), document.getElementById('JSAddButton'));
getCookie(ff, fs, sf, ss, jf, js, add);

},{}]},{},[1])