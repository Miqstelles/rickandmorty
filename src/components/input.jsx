import { useDispatch } from 'react-redux';
import { setNomePersonagem } from "../redux/action";

export function Input() {
    const dispatch = useDispatch()

    const handleCheckboxClick = (event) => {
        dispatch(setNomePersonagem(event.target.value.toLowerCase()))
    }

    return (
        <div className="flex justify-center">
            <input
                className="w-[300px] sm2:w-[350px] md1:w-[460px] text-center, h-[80px] text-[1.5rem] rounded focus: mt-[20px] px-4 border-2 border-black font-MPLUS1CODE bg-[#dfd7d7]"
                onInput={handleCheckboxClick}
                placeholder="Pesquisar Personagem"
                onKeyDown={(event) => {
                    if (event.key === ' ') {
                        const inputValue = event.target.value;
                        const caretPosition = event.target.selectionStart;
                        if (caretPosition === 0 || inputValue[caretPosition - 1] === ' ') {
                            event.preventDefault();
                        }
                    }
                }}
            />
        </div>
    )
}
