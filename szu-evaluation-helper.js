// ==UserScript==
// @name         SZU一键评教助手
// @namespace    https://github.com/Liunian2000/szu-evaluation-helper
// @version      1.0
// @description  【稳定可靠】在深圳大学教学评教页面提供一个悬浮按钮，一键填写所有选项，二次点击确认提交。删除了不稳定的弹窗处理功能。
// @author       流年.
// @match        https://jxpj.szu.edu.cn/*
// @grant        GM_addStyle
// @license      MIT
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMS4yNSAxNmwtNC4yNS00LjI1IDEuNDE0LTEuNDE0TDEwLjc1IDE0LjE3bDYuMDM2LTYuMDM2IDEuNDE0IDEuNDE0TDEwLjc1IDE4eiIvPjwvc3ZnPg==
// ==/UserScript==

(function() {
    'use strict';

    // 'initial': 初始状态 | 'filled': 已填充，待提交
    let scriptState = 'initial';

    // --- UI 元素创建 ---
    const fab = document.createElement('div');
    fab.id = 'one-click-evaluation-fab';
    fab.title = '一键填写评教内容';
    fab.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28px" height="28px">
            <path d="M2.1,19.35l3.55-3.55L1.5,11.65l3.55,3.55L8.6,11.65l3.55,3.55-3.55,3.55,3.55,3.55-4.15,4.15c-0.39,0.39-1.02,0.39-1.41,0l-4.15-4.15C1.71,20.37,1.71,19.74,2.1,19.35z M22.5,12.35l-3.55-3.55l3.55-3.55L18.95,1.7c-0.39-0.39-1.02-0.39-1.41,0l-4.15,4.15l3.55,3.55L13.4,12.95l3.55-3.55l3.55,3.55L16.35,17.1c-0.39,0.39-0.39,1.02,0,1.41l4.15,4.15c0.39,0.39,1.02,0.39,1.41,0l4.15-4.15c0.39-0.39,0.39-1.02,0-1.41L22.5,12.35z"/>
        </svg>
        <span>一键填写</span>
    `;
    document.body.appendChild(fab);

    // --- 核心功能函数 ---
    function fillForm() {
        try {
            const firstOptions = document.querySelectorAll('.question-box ol.question-box-main > li[choice="choice1"]');
            firstOptions.forEach(option => option.click());
            console.log(`评教助手：已完成 ${firstOptions.length} 道选择题。`);

            const adviceTextarea = document.querySelector('textarea.advice-input');
            if (adviceTextarea) {
                adviceTextarea.value = '无';
                adviceTextarea.dispatchEvent(new Event('input', { bubbles: true }));
                console.log('评教助手：已填写建议“无”。');
            }
            return true;
        } catch (error) {
            console.error('评教助手在填充表单时出错:', error);
            alert('评教助手在填充表单时遇到错误，请查看控制台获取详情。');
            return false;
        }
    }

    function submitForm() {
        try {
            const submitButton = document.getElementById('submitBtn');
            if (submitButton) {
                submitButton.click();
                console.log('评教助手：已点击提交按钮。');
                return true;
            } else {
                alert('评教助手：未找到“提交”按钮，请手动提交。');
                return false;
            }
        } catch (error) {
            console.error('评教助手在提交时出错:', error);
            alert('评教助手在提交时遇到错误，请查看控制台获取详情。');
            return false;
        }
    }

    // --- 事件监听 ---
    fab.addEventListener('click', () => {
        if (scriptState === 'initial') {
            if (fillForm()) {
                scriptState = 'filled';
                fab.title = '确认提交';
                fab.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28px" height="28px">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <span>确认提交</span>
                `;
                fab.style.backgroundColor = '#4CAF50';
            }
        } else if (scriptState === 'filled') {
            if (submitForm()) {
                scriptState = 'submitted';
                fab.title = '已提交';
                fab.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28px" height="28px">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.25 16l-4.25-4.25 1.414-1.414L10.75 14.17l6.036-6.036 1.414 1.414L10.75 18z"/>
                    </svg>
                    <span>已提交</span>
                `;
                fab.style.backgroundColor = '#757575';
                fab.style.cursor = 'not-allowed';
            }
        }
    });

    // --- 样式注入 ---
    GM_addStyle(`
        #one-click-evaluation-fab {
            position: fixed; bottom: 30px; right: 30px; width: auto; min-width: 60px; height: 60px;
            padding: 0 15px; background-image: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
            border-radius: 30px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); color: white;
            display: flex; justify-content: center; align-items: center; cursor: pointer; z-index: 9999;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 16px; font-weight: 500; overflow: hidden;
        }
        #one-click-evaluation-fab:hover { transform: scale(1.05); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25); }
        #one-click-evaluation-fab svg { margin-right: 8px; flex-shrink: 0; }
        @media (max-width: 768px) {
            #one-click-evaluation-fab span { display: none; }
            #one-click-evaluation-fab svg { margin-right: 0; }
            #one-click-evaluation-fab { width: 60px; padding: 0; }
        }
    `);
})();
