import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecommendation } from '../../apis/recommendations';
import Card from '../Card/Card';

function Recommendations(props) {
  const {id} = props
  const DataRec = useRecommendation(id);
  console.log(DataRec)
  console.log(id)
  if (!DataRec) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-3 pt-3">
      <hr/>
      <p className="fs-2 fw-bold p-3">Recommendations</p>
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-6 ms-4 me-4">

      {DataRec.map((item) => (
        <div className="col" key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Recommendations;
