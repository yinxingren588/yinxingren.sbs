import React from 'react';
import { OFFICIAL_URL } from '../config/site';

export interface OfficialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
}

/**
 * OfficialLink 组件
 * 规则要求：
 * 1. 所有实际跳转AFF的入口统一通过OfficialLink组件输出
 * 2. 必须设置 target="_blank" 和 rel="sponsored noopener noreferrer"
 * 3. 完整保留Hash、Query和推广参数，不得转码、截断、拼接额外参数或改写
 * 4. OfficialLink是代码组件名称，不代表对目标网站官方身份的认证
 */
export const OfficialLink: React.FC<OfficialLinkProps> = ({
  children,
  className = '',
  onClick,
  ariaLabel,
  ...restProps
}) => {
  return (
    <a
      href={OFFICIAL_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </a>
  );
};
