import React, { useState } from 'react';
import LinkedList from '../Class/LinkedList';

const LinkedListVisualizer = () => {
  const [linkedList, setLinkedList] = useState(new LinkedList());
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInsertAtBeginning = () => {
    if(inputValue.trim() == ''){
      alert('Empty Value !') 
      return
    }
    linkedList.insertAtBegning(parseInt(inputValue));
    setLinkedList(Object.assign(new LinkedList(), linkedList));
    setInputValue('');
    setMessage('');
  };

  const handleInsertAtEnd = () => {
    if(inputValue.trim() == ''){
      alert('Empty Value !') 
      return
    }
    linkedList.insertAtTheEnd(parseInt(inputValue));
    setLinkedList(Object.assign(new LinkedList(), linkedList));
    setInputValue('');
    setMessage('');
  };

  const handleDeleteFromBeginning = () => {
    const msg = linkedList.deleteFromBegning();
    setLinkedList(Object.assign(new LinkedList(), linkedList));
    setMessage(msg || '');
  };

  const handleDeleteFromEnd = () => {
    const msg = linkedList.deleteFromEnd();
    setLinkedList(Object.assign(new LinkedList(), linkedList));
    setMessage(msg || '');
  };

  const handleDeleteGivenValue = () => {
    if(inputValue.trim() == ''){
      alert('Empty Value !') 
      return
    }
    const msg = linkedList.deleteGivenValue(parseInt(inputValue));
    setLinkedList(Object.assign(new LinkedList(), linkedList));
    setInputValue('');
    setMessage(msg || '');
  };

  const handleSearch = () => {
    if(searchValue.trim() == ''){
      alert('Empty Value !') 
      return
    }
    const msg = linkedList.search(parseInt(searchValue));
    setSearchValue('');
    setMessage(msg || '');
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={handleInsertAtBeginning}>Insert at Beginning</button>
      <button onClick={handleInsertAtEnd}>Insert at End</button>
      <button onClick={handleDeleteFromBeginning}>Delete from Beginning</button>
      <button onClick={handleDeleteFromEnd}>Delete from End</button>
      <button onClick={handleDeleteGivenValue}>Delete Given Value</button>
      <input
        type="number"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter value to search"
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Linked List:</h2>
      <p>{linkedList.printList()}</p>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LinkedListVisualizer;
