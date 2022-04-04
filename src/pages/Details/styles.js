import styled from 'styled-components'

export const Container = styled.div`

  h2 {
    margin: 3rem 0;
    font-size: 180%;
    text-align: center;
  }

  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: #fff;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: 0.3s;
  }

  button:hover {
    background-color: #5848c2
  }

  p {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 120%;
  }

  h3 {
    margin-bottom: 1rem;
    color: #6654da;
    font-size: 150%;
  }

  @media screen and (min-width: 768px) {

    padding: 4rem 0;

    .movie {
    flex-direction: row;
    }

    .details {
      margin-left: 4rem;
      max-width: 50%;
    }

    h2 {
      font-size: 200%;
    }

  }

`