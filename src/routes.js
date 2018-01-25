import React, {PropTypes} from 'react';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Redirect
} from 'react-router';

/* eslint-disable no-multi-spaces */
import AppContainer                   from '@modules/AppContainer'

//userProfile
import UserProfileContainer           from '@modules/userProfile/UserProfileContainer'
import UserGeneralContainer           from '@modules/userProfile/general/UserGeneralContainer'
import UserLicensesContainer          from '@modules/userProfile/licenses/UserLicensesContainer'

//school
import SchoolContainer                from '@modules/school/SchoolContainer'
//school/general
import SchoolGeneralContainer         from '@modules/school/general/SchoolGeneralContainer'
//school/pupils
import SchoolPupilsContainer          from '@modules/school/pupils/SchoolPupilsContainer'
import ListPupilsContainer            from '@modules/school/pupils/ListPupilsContainer'
import CreatePupilsContainer          from '@modules/school/pupils/CreatePupilsContainer'
import EditPupilsContainer            from '@modules/school/pupils/EditPupilsContainer'
//school/teachers
import ListTeachersContainer          from '@modules/school/teachers/ListTeachersContainer'
//school/students
import ListStudentsContainer          from '@modules/school/students/ListStudentsContainer'
//school
import SchoolSharedKeysContainer      from '@modules/school/sharedkeys/SchoolSharedKeysContainer'
//school/licenses
import SchoolLicensesContainer        from '@modules/school/licenses/SchoolLicensesContainer'
//school/groups
import ListGroupsContainer            from '@modules/school/groups/ListGroupsContainer'
import ManageGroupContainer           from '@modules/school/groups/ManageGroupContainer'

import PageNotFoundView               from '@modules/PageNotFoundView'

/* eslint-enable no-multi-spaces */

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={AppContainer}>
      <Route path="users/:id" component={UserProfileContainer}>
        <Route path="general" component={UserGeneralContainer} />
        <Route path="licenses" component={UserLicensesContainer} />
        <IndexRedirect to="general" />
      </Route>

      <Route path="schools/:schoolId" component={SchoolContainer}>
        <Route path="general" component={SchoolGeneralContainer} />
        <Route path="pupils" component={SchoolPupilsContainer}>
          <IndexRoute component={ListPupilsContainer} />
          <Route path="create" component={CreatePupilsContainer} />
          <Route path="edit" component={EditPupilsContainer} />
        </Route>
        <Route path="teachers" component={ListTeachersContainer} />
        <Route path="students" component={ListStudentsContainer} />
        <Route path="sharedkeys" component={SchoolSharedKeysContainer} />
        <Route path="licenses" component={SchoolLicensesContainer} />
        <Route path="groups">
          <IndexRoute component={ListGroupsContainer} />
          <Route path="create" component={ManageGroupContainer} />
          <Route path=":groupId" component={ManageGroupContainer} />
        </Route>
        <IndexRedirect to="general" />
      </Route>
      <Route path="404" component={PageNotFoundView} />
      <IndexRedirect to="users/self" />
    </Route>
    <Redirect from="*" to="404" />
  </Router>
)

AppRouter.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppRouter
