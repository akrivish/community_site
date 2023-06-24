import 'bootstrap/dist/css/bootstrap.css';
import LatestArticle from './LatestArticle';
const Latest = () => {
    return(
        <>
        <div className="container">
  <div className="row">
  <div className="col-3"><LatestArticle></LatestArticle></div>
  <div className="col-3"><LatestArticle></LatestArticle></div>
    <div className="col-3"><LatestArticle></LatestArticle></div>
  </div>
</div>
        </>
    )
}
export default Latest