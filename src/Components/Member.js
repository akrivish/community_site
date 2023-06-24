import 'bootstrap/dist/css/bootstrap.css';
import PopularMember from './LatestArticle';
const Member = () => {
    return(
        <>
        <div className="container">
  <div className="row">
  <div className="col-3"><PopularMember></PopularMember></div>
  <div className="col-3"><PopularMember></PopularMember></div>
  <div className="col-3"><PopularMember></PopularMember></div>
  </div>
</div>
        </>
    )
}
export default Member