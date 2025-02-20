import React from "react";

const CardHorizontal = (props) => {
  const { data } = props;
    console.log(data)
  return (
    <>
      {data && data.map((item, idx) => (
        <div key={`cardWisata-${idx}`} className='card mb-3' style={{ maxWidth: "540px" }}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img
                src={item.image}
                className='img-fluid rounded-start'
                alt='...'
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>
                  {item.description}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardHorizontal;
