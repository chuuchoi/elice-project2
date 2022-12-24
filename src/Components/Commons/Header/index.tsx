import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import * as S from './styled';
import { ReactComponent as Logo } from '../../../Pages/Home/assets/logo.svg';
import { ReactComponent as SearchIcon } from './searchicon.svg';
import { ReactComponent as ArrowIcon } from './arrowdown.svg';
import avatar from './sampleAvatar.png';

export const Header = () => {
  const navigate = useNavigate();
  const { pathname: curLocation } = useLocation();
  return (
    <S.HeaderContainer>
      <Logo
        style={{ cursor: 'pointer', marginLeft: '7.7vw' }}
        onClick={() => {
          navigate('/menu/photolists');
        }}
      />
      <S.MenuItems>
        <Link to="/menu/maps">
          {curLocation === '/menu/maps' ? (
            <>
              <S.MenuItem fontWeight="600">지도</S.MenuItem>
              <S.MenuUnderLine layoutId="underLine" />
            </>
          ) : (
            <S.MenuItem fontWeight="400">지도</S.MenuItem>
          )}
        </Link>
        <div style={{ width: '12px' }} />
        <Link to="/menu/photolists">
          {curLocation === '/menu/photolists' ? (
            <>
              <S.MenuItem fontWeight="600">사진</S.MenuItem>
              <S.MenuUnderLine layoutId="underLine" />
            </>
          ) : (
            <S.MenuItem fontWeight="400">사진</S.MenuItem>
          )}
        </Link>
      </S.MenuItems>
      <S.SearchBar
        onClick={() => {
          document.querySelector<HTMLInputElement>('.search_input')?.focus();
        }}
      >
        <SearchIcon />
        <S.SearchInput className="search_input" />
      </S.SearchBar>
      <div style={{ width: '3.16vw' }} />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: '7.7vw',
          width: 'max-content',
        }}
      >
        <S.MuiButton
          textColor="#5F5F5F"
          hoverTextColor="#07B8B8"
          hoverBackgroundColor="#f9f9f9"
        >
          가입하기
        </S.MuiButton>
        <S.MuiButton
          style={{ marginLeft: '24px' }}
          textColor="#ffffff"
          backgroundColor="#07B8B8"
          hoverBackgroundColor="#00A8A7"
        >
          로그인
        </S.MuiButton>
      </div>
    </S.HeaderContainer>
  );
};

export const HeaderWithProfile = () => {
  const [isDropdownOn, setIsDropdownOn] = useState(false);
  const navigate = useNavigate();
  const { pathname: curLocation } = useLocation();
  return (
    <>
      <S.HeaderContainer>
        <Logo
          style={{ cursor: 'pointer', marginLeft: '7.7vw' }}
          onClick={() => {
            navigate('/menu/photolists');
          }}
        />
        <S.MenuItems>
          <Link to="/menu/maps">
            {curLocation === '/menu/maps' ? (
              <>
                <S.MenuItem fontWeight="600">지도</S.MenuItem>
                <S.MenuUnderLine layoutId="underLine" />
              </>
            ) : (
              <S.MenuItem fontWeight="400">지도</S.MenuItem>
            )}
          </Link>
          <div style={{ width: '12px' }} />
          <Link to="/menu/photolists">
            {curLocation === '/menu/photolists' ? (
              <>
                <S.MenuItem fontWeight="600">사진</S.MenuItem>
                <S.MenuUnderLine layoutId="underLine" />
              </>
            ) : (
              <S.MenuItem fontWeight="400">사진</S.MenuItem>
            )}
          </Link>
        </S.MenuItems>
        <S.SearchBar
          onClick={() => {
            document.querySelector<HTMLInputElement>('.search_input')?.focus();
          }}
        >
          <SearchIcon />
          <S.SearchInput className="search_input" />
        </S.SearchBar>
        <div style={{ width: '3.16vw' }} />
        <div
          style={{
            display: 'flex',
            marginLeft: 'auto',
            marginRight: '7.7vw',
            width: 'max-content',
          }}
        >
          <S.MuiButton
            textColor="#07B8B8"
            hoverBackgroundColor="#f9f9f9"
            onClick={alert}
          >
            사진 올리기
          </S.MuiButton>
          <S.ProfileContainer
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOn((c) => !c);
            }}
          >
            <S.ProfileImage src={avatar} alt="프사" />
            <ArrowIcon />
          </S.ProfileContainer>
          {isDropdownOn && (
            <S.DropdownContainer>
              <S.Dropdown>
                <S.ProfileImage
                  style={{ scale: '3', marginBottom: '50px' }}
                  src={avatar}
                  alt="프사"
                />
                <S.StyledP
                  style={{ marginBottom: '10px' }}
                  fontSize="20px"
                  fontWeight="600"
                >
                  유저닉네임
                </S.StyledP>
                <S.StyledP style={{ marginBottom: '40px' }} fontSize="18px">
                  photolog@naver.com
                </S.StyledP>
                <S.TextButton>내 페이지</S.TextButton>
                <S.TextButton>계정 관리</S.TextButton>
                <S.TextButton>로그아웃</S.TextButton>
              </S.Dropdown>
            </S.DropdownContainer>
          )}
        </div>
        {isDropdownOn && (
          <S.DropdownRemover
            onClick={(e) => {
              setIsDropdownOn(false);
            }}
          />
        )}
      </S.HeaderContainer>
      {isDropdownOn && (
        <S.DropdownRemover
          onClick={(e) => {
            setIsDropdownOn(false);
          }}
        />
      )}
    </>
  );
};

export const HeaderForPost = () => {
  const navigate = useNavigate();
  const handleScroll = (e: any) => {
    const header = document.querySelector('.header');
    if (e.deltaY < 0) {
      header?.classList.remove('up');
    } else if (window.scrollY > 77) {
      header?.classList.add('up');
    }
  };
  const handleResize = (e: any) => {
    const header = document.querySelector('.header');
    if (window.scrollY < 77) header?.classList.remove('up');
  };
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <S.HeaderContainer className="header">
      <Logo
        style={{ cursor: 'pointer', margin: 'auto' }}
        onClick={() => {
          navigate('/menu/photolists');
        }}
      />
    </S.HeaderContainer>
  );
};
