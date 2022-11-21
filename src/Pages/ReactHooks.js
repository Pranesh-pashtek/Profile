import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

const ReactHooks = () => {

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  
  return (
    <React.StrictMode>
      <div id="blog">
      <ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>  
  <Box sx={{bgcolor: 'background.default',color: 'text.primary' }}>
        <div className="blog-content">
        <MyApp />
          <div className="blog-grid">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                <Box sx={{bgcolor: 'background.default',color: 'text.primary',border: "groove" }}>
                  <div
                    // class="main-title text-center wow fadeIn"
                    style={{ marginTop: "30px" }}
                  >
                    <h3 style={{textAlignLast: 'center'}}>Blog Details</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    <p style={{textAlignLast: 'center'}}>
                      ReactJS and Web Components everything else
                      accomplished on my spare software development time.
                    </p>
                  </div>
                  </Box>
                </div>
              </div>
            </div>
            <div className="blog-details wow fadeIn text-left">
              <div className="container">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-xl-9 col-lg-9 col-md-12 col-xs-12 col-sm-12">
                    <div className="blog-main">
                      <img
                        src="assets/img/blog-details/hooks.png"
                        alt="React hooks were introduced in version 16.8"
                        class="blog-img"
                      />
                      <div className="blog-head">
                        <h3>
                          <strong>What is hooks in React JS?</strong>
                        </h3>
                      </div>
                      {/* <div className="blog-middle">
                        <i class="fa fa-user blog-icon" aria-hidden="true"></i>
                        <h2>Admin</h2>
                        <i
                          class="fa fa-calendar blog-icon"
                          aria-hidden="true"
                        ></i>
                        <h2>22 August 2021</h2>
                      </div> */}
                      <div className="blog-bottom">
                        <p>
                          In this article, you will learn what are hooks in
                          React JS? and when to use react hooks? React JS is
                          developed by Facebook in the year 2013. There are many
                          students and the new developers who have confusion
                          between react and hooks in react. Well, it is not
                          different, react is a programming language and hooks
                          is a function that is used in react programming
                          language.
                        </p>
                        <h4>When were hooks introduce?</h4>
                        <p>
                          React hooks are introduced in version 16.8 which is
                          the recent Update in the react programming language.
                          The concept of hooks has made the programming so
                          easier for the react developers that everyone is now
                          adapting the Hooks concept in their programming.
                        </p>
                        <p>
                          React hooks are always utilized in a useState and
                          other react features without writing a class. React
                          hooks are the functions that hook into the react state
                          life-cycle features from the function components.
                        </p>
                        <p>
                          Like other features in react hooks does not work
                          inside the classes it needs to be separated from the
                          classes and used in the code. The hooks function must
                          be utilized at the top of the react functions as it
                          makes a clear vision of the program we want to execute
                          in the project. You can use hooks without classes in
                          the react programming and you can create your own hook
                          to reuse the state full behaviour of different
                          components in reactive programming.
                        </p>
                        <p>
                          If we want to try any code related to hooks, we need
                          to write it in the functional component itself. If we
                          write out of the functional component it will show us
                          an error (invalid hooks call on the web page) so to
                          avoid that error make sure that you write the hooks in
                          the functional component.
                        </p>
                        <img
                          src="assets/img/blog-details/react-hooks-about.jpg"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                        <br />
                        <br />
                        <h4>What are the requirements to use react hooks?</h4>
                        <p>
                          As we have mentioned that the react hooks are
                          introduced in the version of 16.8. To make sure that
                          the react hooks works properly. The developer should
                          make sure that he or she is using the NODE version of
                          6 or above and the NPM version 5.2 or above. If the
                          versions are below this criterion the react hooks will
                          not work exactly the way you wish to see it. It is
                          very important to know when to use react hooks.
                        </p>
                        <p>
                          Let’s write a small program of Hooks function using a
                          useState. We will be making a program of increasing
                          numbers on the button click.
                        </p>
                        <p>
                          When you add useState you will see that an extension
                          will be added at the top of react. Let’s see react
                          hooks example:
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import React, { useState } from “react”;"}
                        </SyntaxHighlighter>
                        <p>Syntax:-</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {
                            "const [count, setCount] = useState(0);\nconst ButtonClick = () => {\nsetCount(count + 1);\n};"
                          }
                        </SyntaxHighlighter>
                        <p>Now in the HTML code, you have to write:</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {
                            "<h1>{count}</h1>\n<button onClick= {ButtonClick}> Click Me </button>"
                          }
                        </SyntaxHighlighter>
                        <p>
                          So this is all about what are hooks in React JS? and
                          react hooks example. If you have any questions you can
                          ask in the comment Info At One always try our best to
                          help you with it…
                        </p>

                        {/* Go to www.addthis.com/dashboard to customize your tools */}
                        <div class="addthis_inline_share_toolbox"></div>
                      </div>
                    </div>
                    <div className="pagination">
                      <ul>
                        <li>
                          <a href="/ReactRedux">Next Post</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
      </div>
    </React.StrictMode>
  );
};

export default ReactHooks;
