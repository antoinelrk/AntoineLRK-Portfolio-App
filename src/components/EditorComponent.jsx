import React, { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import TextButton from './UI/RoundedButton/TextButton';
import TextIconButton from './UI/RoundedButton/TextIconButton';

const EditorComponent = ({ onDataSave, isEditable, contentData }) => {
    const editorContainer = useRef(null)
    let editorInstance = null;

    useEffect(() => {
        if (contentData && editorContainer.current) {
            editorInstance = new EditorJS({
                holder: editorContainer.current,
                readOnly: !isEditable,
                data: JSON.parse(contentData)
            });

            return () => {
                if (editorInstance) {
                    editorInstance.destroy();
                }
            };
        }
    }, [contentData]);

    const handleSave = async () => {
        const data = await editorInstance.save();
        onDataSave(data);
    };

    const buttonIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 448 512"><path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"/></svg>`

    return (
        <div>
            <div ref={editorContainer}></div>
            {isEditable ? (<TextIconButton onClick={handleSave} name="Sauvegarder" icon={buttonIcon}></TextIconButton>) : ""}
        </div>
    );
};

export default EditorComponent;
