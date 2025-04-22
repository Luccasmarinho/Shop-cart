import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .search {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .search__input {
    font-family: inherit;
    font-size: 14px;
    border: 1px solid #767676;
    color: #767676;
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: -1.5rem;
    height: 30px;
    width: 18rem;
  }

  .search__input::-webkit-input-placeholder {
    font-weight: 400;
    color: #767676;
    font-size: 14px;
  }

  .search__button {
    border: none;
    background-color: #fff;
    margin-top: 0.1em;
  }

  .search__button:hover {
    cursor: pointer;
  }

  .search input:focus {
    outline: none;
  }`;
