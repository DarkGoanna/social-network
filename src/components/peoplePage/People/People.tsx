import style from './People.module.sass'
import Person from '../Person/Person'
import Pagination from '../../Pagination/Pagination'
import classNames from 'classnames'
import { FC } from 'react'
import { userDataType } from '../../../store/redusers/people-reduser'

type PeopleType = {
  people: Array<userDataType>
  totalCount:number
  countOnPage:number
  toggleActivePage: (pageNumber:number) => void
  changingFolowingStatus: Array<number>
  changeFolowingStatus: (inProgress:boolean, personID:number) => void
  follow: (personID:number) => void
  unfollow: (personID:number) => void
  isLoading: boolean
}
const People:FC<PeopleType> = (props) => {
  // props
  let {
    people, 
    totalCount, 
    countOnPage, 
    toggleActivePage, 
    changingFolowingStatus, 
    changeFolowingStatus, 
    follow, 
    unfollow
  } = props;
  
  // people names
  const peopleData = people.map((person: userDataType) => {
    return (
      <Person 
        key={person.id} 
        personData={person} 
        follow={follow} 
        unfollow={unfollow}
        changingFolowingStatus={changingFolowingStatus}
        changeFolowingStatus={changeFolowingStatus}
      />
    )
  });

  return (
    <div>
      <div className={classNames(style.peopleList, {showPreloader: props.isLoading})}>
        {peopleData}
      </div>
      <Pagination 
        totalCount={totalCount} 
        countOnPage={countOnPage} 
        toggleActivePage={toggleActivePage}
      />
    </div>
  )
}
export default People;