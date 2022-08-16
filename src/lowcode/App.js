import React, { useState } from 'react';
import './App.css';
import { ReactSortable } from 'react-sortablejs';
import { formItemData } from '../configure/dragList';
import Renderer from '../renderer/renderSingleComponent';
import { copyContent } from './utils/util';
import DragItemEdit from './DragItemEdit/index';

/* 拖拽选择组件区*/
const DragList = () => {
  const [state, setState] = useState([...formItemData]);
  return (
    <ReactSortable
      className='drag-list'
      group={{
        name: 'shared',
        pull: 'clone',
        put: false,
      }}
      list={state}
      setList={data => setState(data)}
      sort={false}
    >
      {state.map((item, index) => (
        <div key={index}>
          <button>
            {item.label}
          </button>
        </div>
      ))
      }
    </ReactSortable>
  );
};

function App() {
  const [list, setList] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editItem, setEditItem] = useState({
    item: {},
    index: null,
  });

  const handleEdit = ({ item, index }) => {
    list[index] = {
      ...item,
    };
    setList([...list]);
  };

  const handleSave = async () => {
    if (!list.length) {
      console.warn('数据为空');
    } else {
      copyContent(JSON.stringify(list), '保存成功, 请在粘贴板中查看数据');
    }
  };
  const handlePreview = async () => {
    if (!list.length) {
      console.warn('数据为空');
    } else {
      console.log('切换到预览页面');
    }
  };

  const handleClear = async () => {
    setList([]);
  };

  const openEditDialog = ({ item, index }) => {
    setEditItem({
      item: { ...item },
      index,
    });
    setShowEdit(true);
  };

  const deleteItem = ({ item, index }) => {
    // cleanCacheFormData();
    list.splice(index, 1);
    setList([...list]);
  };


  const renderBtn = (item, index) => (
    <div style={{
      textAlign: 'right',
      cursor: 'pointer',
    }}>
      <div className='icon-operate'>
        <div onClick={() => openEditDialog({ item, index })}>编辑</div>
        <div onClick={() => deleteItem({ item, index })}>删除</div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <DragList/>
      <section className='drag-catch-container'>
        <div style={{
          background: 'white',
          padding: 10,
          justifyContent: 'flex-end',
        }}>
          <button onClick={handleSave}>
            保存
          </button>
          <button onClick={handlePreview}>
            预览
          </button>
          <button onClick={handleClear}>
            清空
          </button>
        </div>
        <ReactSortable
          animation={200}
          group={{
            name: 'shared',
            pull: true,
            put: true,
          }}
          style={{
            border: '1px solid green',
            flex: 1,
          }}
          list={list}
          setList={data => {
            setList(data)
          }}
        >
          {list.map((item, index) => (
            <div key={index} style={{
              ...item.parentStyle,
              border: '1px dashed gray',
              margin: 10,
            }}>
              {renderBtn(item, index)}
              {Renderer({ item })}
            </div>
          ))}
        </ReactSortable>
      </section>
      { showEdit &&
        <DragItemEdit
          {...editItem}
          handleEdit={handleEdit}
        />
      }
    </div>
  );
}

export default App;
