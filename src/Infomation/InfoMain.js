import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme, Link, MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const theme = createMuiTheme({
  
  box: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  typography: {
    fontFamily: [
      "Roboto", 
      'Noto Sans KR', 
      "sans-serif",
    ].join(','),
  },
});

const infoStyle = makeStyles({
  box: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  size: {
    fontSize: "1.8rem",
  },
});

function InfoMain() {
  const classes = infoStyle();
  return (
    <Container maxWidth="lg">
      <Box className={classes.box} fontFamily="initial">
        <MuiThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom={true} className={classes.size}>메이플스토리 (KMS) 추가 옵션 확률 계산기</Typography>
          <Typography variant="body1"><Link href="https://maplestory.nexon.com/News/Notice/Notice/133316" target="_blank" rel="noreferrer" color="initial">2021.03.05에 공개한 로직</Link>을 바탕으로 원하는 추가 옵션을 뽑을 확률과 들어갈 환생의 불꽃 개수(기대값)를 알려줍니다.</Typography>
          <ul>
            <li><Typography variant="body1">결과는 <Link href="https://ko.wikipedia.org/wiki/%EC%9D%B4%ED%95%AD_%EB%B6%84%ED%8F%AC" target="_blank" rel="noneferrer" color="initial">이항 분포</Link>를 이용하여 상위 50%의 값을 출력합니다.</Typography></li>
            <li><Typography variant="body1">모두 문의 사항은 <Link href="mailto:ehrrhgus0324@gmail.com" color="initial">ehrrhgus0324@gmail.com</Link>로 이메일 부탁드립니다.</Typography></li>
            <li><Typography variant="body1">그리고 이득 많이 보세요 :3</Typography></li>
          </ul>
        </MuiThemeProvider>
      </Box>
    </Container>
  )
}

export default InfoMain;