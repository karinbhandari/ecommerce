import React, { useState, ChangeEvent, ReactElement } from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton, Theme } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

const SearchBoxStyles = (theme: Theme) =>
  createStyles({
    searchBoxWrap: {
      // border: '1px solid red',
      width: '100%',
      marginTop: theme.spacing(1),
      '& > div': {
        height: 46,
      },
    },
  });

type SearchBoxProps = {
  setState: (state: boolean) => void;
};

type SearchBoxStylesProps = SearchBoxProps & WithStyles<typeof SearchBoxStyles>;

const SearchBox = ({ setState, classes }: SearchBoxStylesProps): ReactElement => {
  const [search, setSearch] = useState<string | undefined>('');
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const closeSearchField = () => {
    setState(false);
  };
  return (
    <FormControl id="outlined-search-box-wrap" className={classes.searchBoxWrap}>
      <OutlinedInput
        id="outlined-search-box"
        type={'text'}
        value={search}
        onChange={handleSearchChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="cancel-search"
              onClick={closeSearchField}
              //   onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              <ClearRoundedIcon />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={0}
      />
    </FormControl>
  );
};

export default withStyles(SearchBoxStyles)(SearchBox);
