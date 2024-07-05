import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from './Header';
import MenuTypeButtons from './MenuTypeButtons';
import SpecialRequestInput from './SpecialRequestInput';
import MenuDisplay from './MenuDisplay';
import ChatInterface from './ChatInterface';
import PDFDownloadButton from './PDFDownloadButton';
import Footer from './Footer';
import '../styles/App.css';

function App() {
  const [menuType, setMenuType] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [generatedMenu, setGeneratedMenu] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonPos, setButtonPos] = useState({ top: 0, left: 0 });

  const inputRef = useRef(null);
  const menuButtonsRef = useRef(null);

  const [{ top, left }, setSpring] = useSpring(() => ({ top: 0, left: 0 }));

  useEffect(() => {
    if (selectedButton && menuButtonsRef.current && inputRef.current) {
      const menuButtonsRect = menuButtonsRef.current.getBoundingClientRect();
      const inputRect = inputRef.current.getBoundingClientRect();

      const targetTop = inputRect.top - menuButtonsRect.height + window.scrollY; 
      const targetLeft = inputRect.left - (menuButtonsRect.width / 2) + (inputRect.width / 2) + window.scrollX;

      setSpring({ top: targetTop, left: targetLeft });
    } else if (menuButtonsRef.current) {
      const buttonsRect = menuButtonsRef.current.getBoundingClientRect();
      setButtonPos({
        top: buttonsRect.top + window.scrollY,
        left: buttonsRect.left + window.scrollX,
      });
      setSpring({ top: buttonsRect.top + window.scrollY, left: buttonsRect.left + window.scrollX });
    }
  }, [selectedButton, setSpring]);

  const handleMenuTypeSelect = (type) => {
    setMenuType(type);
    setSelectedButton(type);
    setGeneratedMenu(`Sample ${type} menu. Replace this with API call.`);
  };

  const handleSpecialRequest = (request) => {
    setSpecialRequest(request);
    setGeneratedMenu(`Sample menu based on request: ${request}. Replace this with API call.`);
  };

  const handleChatInput = (input) => {
    setChatMessages([...chatMessages, { sender: 'user', text: input }]);
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'ai', text: `AI response to: ${input}. Replace this with API call.` }]);
    }, 1000);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p className="intro-text">Welcome to Meny Akuten. Generate creative and customized restaurant menus effortlessly.</p>
        <animated.div 
          ref={menuButtonsRef} 
          style={{ position: 'absolute', top: selectedButton ? top : buttonPos.top, left: selectedButton ? left : buttonPos.left }}
        >
          <MenuTypeButtons 
            onSelectType={handleMenuTypeSelect} 
            selectedButton={selectedButton} 
            inputRef={inputRef} 
          />
        </animated.div>
        <SpecialRequestInput ref={inputRef} onSubmit={handleSpecialRequest} />
        <div className="content-area">
          <MenuDisplay menu={generatedMenu} />
          <ChatInterface messages={chatMessages} onSendMessage={handleChatInput} />
        </div>
        <PDFDownloadButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
