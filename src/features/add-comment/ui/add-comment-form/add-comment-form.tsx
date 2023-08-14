import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, classNames, Hstack, Input, ReducersList, useAppDispatch, useDynamicModuleLoader } from '@/shared';
import { getAddCommentError, getAddCommentText } from '../../model/selectors';
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';

import styles from './add-comment-form.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addComment: addCommentReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('comment');
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentText);
  const error = useSelector(getAddCommentError);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });

  return (
    <Hstack
      data-testid="AddCommentForm"
      justify="between"
      w100
      className={classNames(styles.AddCommentForm, {}, [className])}
    >
      <Input
        data-testid="AddCommentForm.Input"
        className={styles.input}
        placeholder={t('Введите текст комментария') || ''}
        value={text}
        onChange={onCommentTextChange}
      />
      <Button
        data-testid="AddCommentForm.Button"
        onClick={onSendHandler}
      >
        {t('Отправить')}
      </Button>
    </Hstack>
  );
});

export { AddCommentForm };
