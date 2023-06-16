import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comment'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you Sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
     <CommentDetail 
       author = 'Sam' 
       timeAgo = '  Today at 4:40 PM' 
       text = '   nice blog post!'
     />
     </ApprovalCard>

     <ApprovalCard>
     <CommentDetail
       author = 'Jams' 
       timeAgo = '  Today at 5:00 AM' 
       text = '   its just outstanding!'
       />
       </ApprovalCard>

       <ApprovalCard>
     <CommentDetail 
       author = 'Sasi' 
       timeAgo = '  yesterday at 9:00 PM' 
       text = '    not so good!'
       />
       </ApprovalCard>

    </div>

  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));