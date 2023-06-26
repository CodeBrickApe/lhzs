import styled from "styled-components";

var yellow = '#ffdd40';
var dark = '#2f313a';
var deg = '-86deg';
var trans = ' all 0.4s ease 0s';

export const FriendLinkWrapper = styled.div`
   margin: 0 auto;
  /* width: 40rem; */
    padding: 0;
    /* overflow-x: hidden */
    /* display: flex;
    justify-content: center; */ 
    font-family: "Lato", Arial, Helvetica, serif;
    /* background: linear-gradient(90deg, #131417, ${dark} 35% 65%, #131417); */
    font-size: 1em;
    width: 90vmin;
`
export const Friend = styled.ul`
  padding: 2em 0 2em 2.5em;
  margin: 0;
 `

export const Member = styled.li`
    margin: 1.5em 0 0.5em;
    padding: 0.73em;
    background: linear-gradient(83deg, ${yellow} 0 97%,  #fff0 calc(97% + 1px) 100%);
    position: relative;
    list-style: none;
    display: block;
    transform: scale(0.85);
    transition: ${trans};
    min-height: 8em;
    :nth-of-type(even){
      text-align: right;
      background: linear-gradient(-83deg,${yellow} 0 97%,#fff0 calc(97% + 1px) 100%);
      .thumb {
          --deg: 86deg;
          float: right;
          margin-left: 2em;
          margin-right: -3em;
          transform: rotate(4deg);
      }
      h3 {
          left: inherit;
          right: 9vmin;
          transform: rotate(2deg);
          transform-origin: right bottom;
          background-color: black;
          /* background: linear-gradient(-182deg, #fff0 60%, ${dark} 0 100%); */
      }
      p a{
        float: left;
      }
      :hover .thumb {
        --deg: 91deg;
      }
    }
    :hover {
      transform: scale(1);
      transition: ${trans};
      filter: drop-shadow(0px 20px 10px #0008);
      .thumb {
        padding: 0.1em;
        transition: ${trans};
        transform: rotate(-1deg);
        --deg: -89deg;
      }
      .thumb img {
        filter: none;
        transition: ${trans};
      }
      h3 {
        transition: ${trans};
        transform: rotate(0deg);
        /* background: linear-gradient(180deg, #fff0 59%, ${dark} 0 100%); */
      }
    }
    
 `
export const Thumb = styled.div`
   width: 13vmin;
    height: 13vmin;
    float: left;
    margin-right: 1.25em;
    background: linear-gradient(${deg}, ${dark} 0 70%, ${yellow} 0% 100%);
    transform: rotate(-4deg);
    transition: ${trans};
    border-radius: 0.25em;
    overflow: hidden;
    margin-left: -3em;
    padding: 0.5em;
    img{
      width: 100%;
      height: 100%;
      border-radius: 0.25em;
      filter: grayscale(1);
      background: ${dark};
    }
    
 `
export const Description = styled.div`
 padding-top: 1vmin;

 `

export const Name = styled.h3`
    /* background: linear-gradient(182deg, #fff0 60%, ${dark} 0 100%); */
    top: 1.5em;
    background-color: black;
    display: inline;
    transform: rotate(-2deg);
    position: absolute;
    margin: 0;
    margin-top: -2.25em;
    left: 9vmin;
    padding: 0.2em 0.75em;
    color: ${yellow};
    border-radius: 0.25em;
    font-size: 1.35em;
    transform-origin: left bottom;
 `

export const Introduction = styled.p`
  padding: 0 2em;
  margin-bottom: 1em;
  margin: 1em 0;
`

export const PathLink = styled.a`
    display: inline-block;
    margin: 1em 0 0 0;
    background: ${dark};
    color: ${yellow};
    padding: 0.1em 0.5em 0.35em;
    border-radius: 0.5em;
    text-decoration: none;
    transition: ${trans};
    font-size: 1em;
    float: right;

    :hover {
      transition: ${trans};
      color: ${dark};
      background: ${yellow};
      font-weight: bold;
    }
`