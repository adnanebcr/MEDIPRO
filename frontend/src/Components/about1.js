import React, { useEffect, useCallback, useState } from "react";
import "./styles.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [
  {
    id: 1,
    title: "Stacked Card Carousel",
    copy:
      "Combiner le meilleur de ce qu’offre la nature et les connaissances scientifiques innovantes pour fabriquer des compléments alimentaires premium, de haute qualité, efficaces, sécuritaires et adaptés à chaque tranche d’âge."
  },
  {
    id: 2,
    title: "Second Item",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "A Third Card",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla."
  },
  {
    id: 4,
    title: "Fourth",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <section id='About-Card'>
        <div className="container">
      <ul className="card-carousel">
        {cardItems.map((card, index) => (
          <li
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`} 
          >
            
            <h5 className='text-center'>{card.copy}</h5>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default CardCarousel;


// import React from "react";
// import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
// import aboutimg1 from "../Assets/img/aboutimg1.jpg"
// import '../App.css'

// const AboutSection1 = () => {
//     return (
//         <MDBContainer id="AboutSection1">
//         <section className="my-5">
//             <h2 className="h1-responsive font-weight-bold text-center my-5">
//                     Notre philosophie et engagement
//         </h2>


//             <MDBRow>
//                 <MDBCol lg="5" className="text-center text-lg-left">
//                     <img
//                         className="img-fluid"
//                         src={aboutimg1}
//                         alt=""
//                     />
//                 </MDBCol>
//                 <MDBCol lg="7">
//                     <MDBRow className="mb-3">
//                         <MDBCol size="1">
//                         </MDBCol>
//                         <MDBCol xl="10" md="11" size="10">
                           
//                                 <p >
//                                     <span className="para">Améliorer naturellement</span> la santé  des individus tout au long de la vie (du nourrisson à l’adulte)
//                 </p>
//                         </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="mb-3">
//                         <MDBCol size="1">
                           
//                         </MDBCol>
//                         <MDBCol xl="10" md="11" size="10">
//                                 <p >
//                                     <span className="para">Combiner le meilleur</span> de ce qu’offre la nature et les connaissances scientifiques innovantes pour fabriquer des compléments alimentaires premium, de haute qualité, efficaces, sécuritaires et adaptés à chaque tranche d’âge.
//                 </p>
//                         </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="mb-3">
//                         <MDBCol size="1">
//                         </MDBCol>
//                         <MDBCol xl="10" md="11" size="10">
                            
//                                 <p >
//                                     <span className="para">Maintenir notre place de leader national</span> dans l’industrie haut de gamme de la phytothérapie en proposants des produits diversifiés qui touchent plusieurs champs d’application médicales. 
//                 </p>
//                         </MDBCol>
//                     </MDBRow>
//                 </MDBCol>
//                 </MDBRow></section>
//             </MDBContainer>
        
//     );
// }

// export default AboutSection1;