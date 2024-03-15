import AutomaticallyCloseModal from "@components/common/AutoCloseModal";
import ModalWrapper from "@components/common/ModalWrapper";
import { useCombinedStore } from "@store/index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  const { likeList, handleLike, detailExhibitionInfo } = useCombinedStore();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openTimeoutModal, setOpenTimeoutModal] = useState(false);
  const onCloseModal = () => {
    setOpenModal(false);
    setOpenTimeoutModal(false);
  };
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const reserveExhibition = () => {
    setOpenTimeoutModal(!openTimeoutModal);
  };
  useEffect(() => {
    return () => {};
  }, []);
  if (detailExhibitionInfo === null) {
    return navigate("/");
  }

  return (
    <>
      <img src={detailExhibitionInfo.firstimage} alt="" />
      <div className="px-4">
        <h2>{detailExhibitionInfo.title}</h2>
        <p>{detailExhibitionInfo.contentid} 원</p>
        <div className="flex justify-between">
          <p>{detailExhibitionInfo.addr1} </p>
          <button onClick={() => handleLike(detailExhibitionInfo)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className={`-mt-0.5 h-5 w-5 ${
                !likeList.some(
                  (item) => item.contentid === detailExhibitionInfo.contentid
                )
                  ? "text-white border border-yellow-400"
                  : "text-yellow-400"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          onClick={onOpenModal}
          className="bg-primary h-16 flex justify-center items-center"
        >
          <button className="w-full h-full text-white hover:text-black">
            예매하기
          </button>
        </div>
        {openModal ? (
          <ModalWrapper
            onCloseModal={onOpenModal}
            modalTitle="티켓을 예매하시겠습니까? 예매 내역은 이메일로 전송됩니다"
          >
            <div className="flex flex-col gap-2 mt-14">
              <button
                onClick={reserveExhibition}
                className="bg-primary h-16 flex justify-center items-center"
              >
                확인
              </button>
              <button className="bg-white border border-primary h-16 flex justify-center items-center">
                취소
              </button>
              {openTimeoutModal ? (
                <AutomaticallyCloseModal
                  modalText="예매가 완료되었습니다."
                  timeoutTime={500}
                  callback={onCloseModal}
                />
              ) : (
                ""
              )}
            </div>
          </ModalWrapper>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DetailPage;
