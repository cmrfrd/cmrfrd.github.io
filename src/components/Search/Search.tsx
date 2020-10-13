import Icons from '@icons';
import { ITAOAThemeUIContext } from '@types';
import { theme } from '@utils';

import styled from '@emotion/styled';
import * as CSS from 'csstype';
import { motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import { useColorMode } from 'theme-ui';

const Search: React.FC<{}> = (props: any) => {
  const { elements, setSearchResults, placeholder, filter, sort } = props;
  const { setCurrentPage } = props;
  const { searching, setSearching } = props;
  const { setNumSearchResults } = props;

  const [colorMode] = useColorMode();
  const tcolors = colorMode === 'dark' ? theme.colors.modes.dark : theme.colors;

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setSearchTerm(event.target.value);
  };

  const resultsTimeoutRef = useRef(null);
  useEffect(() => {
    if (resultsTimeoutRef.current !== null) {
      clearTimeout(resultsTimeoutRef.current);
    }

    const results = elements.filter((e: any) => filter(e, searchTerm)).sort(sort);
    console.log('num results', results.length);

    resultsTimeoutRef.current = setTimeout(() => {
      resultsTimeoutRef.current = null;
      setSearchResults(results);
      setNumSearchResults(results.length);
    }, 375);

    setSearchResults([]);
  }, [searchTerm]);

  const searchingTimeoutRef = useRef(null);
  useEffect(() => {
    if (searchingTimeoutRef.current !== null) {
      clearTimeout(searchingTimeoutRef.current);
    }

    searchingTimeoutRef.current = setTimeout(() => {
      searchingTimeoutRef.current = null;
      console.log('not searching');
      setSearching(false);
    }, 400);

    setSearching(true);
    setCurrentPage(0);
    console.log('searching');
  }, [searchTerm]);

  return (
    <InputContainer>
      <IconContainer>
        {searching ? (
          <LoaderContainer>
            <CircleLoader />
          </LoaderContainer>
        ) : (
          <Icons.SearchIcon fill={tcolors.invbackground} />
        )}
      </IconContainer>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={e => {
          console.log('focus', e);
        }}
        onScroll={e => {
          e.preventDefault();
        }}
      />
    </InputContainer>
  );
};

export default Search;

const CircleLoader: React.FC<{}> = () => {
  const spinTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 1
  };

  return (
    <Container>
      <CircleLoaderContainer animate={{ rotate: 360 }} transition={spinTransition} />
    </Container>
  );
};

const CircleLoaderContainer = styled(motion.span)((p: ITAOAThemeUIContext) => ({
  display: 'block',
  width: '2rem',
  height: '2rem',
  border: `0.25rem solid ${p.theme.colors.background}`,
  borderTop: `0.25rem solid ${p.theme.colors.primary}`,
  borderRadius: '50%',
  position: 'absolute',
  boxSizing: 'border-box',
  top: '0.4rem',
  left: '0.5rem'
}));

const Container = styled.div(() => ({
  position: 'relative',
  width: '3rem',
  height: '3rem',
  boxSizing: 'border-box'
}));

const InputContainer = styled.div(() => ({
  position: 'relative',
  display: 'inline-block',
  paddingTop: '20px',
  paddingBottom: '20px',
  width: '100%',
  svg: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '1rem'
  }
}));

const LoaderContainer = styled.div(() => ({
  position: 'absolute',
  right: '0.8rem'
}));

const Input = styled.input((p: ITAOAThemeUIContext) => ({
  outline: 0,
  borderWidth: '0 0 2px',
  borderColor: p.theme.colors.invbackground as CSS.ColorProperty,
  color: p.theme.colors.invbackground as CSS.ColorProperty,
  background: 'transparent',
  height: '30px',
  paddingTop: '0.5rem',
  width: '100%'
}));

const IconContainer = styled.div(() => ({}));
