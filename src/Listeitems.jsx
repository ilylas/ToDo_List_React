import PropTypes from 'prop-types';

export default function Listeitems({itemData,deleteTodo}) {
  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex">
        <span>{itemData.content}</span>
        <button onClick={()=>deleteTodo(itemData.id)} className="ml-auto bg-red-600 rounded w-6 h-6 text-zinc-200">X</button>
    </li>

    
  )
}

Listeitems.propTypes = {
    itemData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };