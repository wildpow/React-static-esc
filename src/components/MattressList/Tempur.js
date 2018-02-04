import React from 'react';
import { withRouteData, Head } from 'react-static'

import {  MainWrapper,
          Wrapper,
          LinkWrapper,
          StyledLink,
          MattImg,
          Name, MainTitle, TempurPImg  } from './MattListStyles';

import TempurImg from '../../images/TempurLogo2.png';


export default withRouteData(({Brands}) => (
  <MainWrapper>
    {console.log(Brands.mattresses)}
        <Head>
          <title>ESC: Tempur-Pedic</title>
          <meta name="description" content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."/>
        </Head>
        <MainTitle>
          <TempurPImg src={TempurImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return ( 
              <LinkWrapper  key={mattress.id}>
                <StyledLink to={`/brands/tempurpedic/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>)
          })}
          </Wrapper>
      </MainWrapper>
))



// Tempur = ({ data: { loading, error, Brands} }) => {
//   if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
//   if(!loading) {
//     return (
//       <MainWrapper>
//         <Head>
//           <title>ESC: Tempur-Pedic</title>
//           <meta name="description" content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."/>
//         </Head>
//         <MainTitle>
//           <TempurPImg src={TempurImg} alt="Logo"/>
//         </MainTitle>
//         <Wrapper>
//           {Brands.mattresses.map((mattress) => {
//             return ( 
//               <LinkWrapper  key={mattress.id}>
//                 <StyledLink to={`/brands/tempurpedic/${mattress.uri}`}>
//                   <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
//                   <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
//                 </StyledLink>
//               </LinkWrapper>)
//           })}
//           </Wrapper>
//       </MainWrapper>
//     )
//   }
//   return null
// }

// export const tempurMattresses = gql`
//   query tempurMattresses {
//     Brands(brand:"Tempur-Pedic") {
//       mattresses {
//         uri
//         brandName
//         id
//         subName
//         subBrand
//         coverImg {
//           handle
//         }
//       }
//     }
//   }
// ` 


// export default graphql(tempurMattresses)(Tempur);