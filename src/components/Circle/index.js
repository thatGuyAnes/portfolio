import React from 'react';
import './style.scss';

const Circle = () => {
  return (
    <div className="c-scroll-circle" data-scroll="" data-scroll-delay="0.03" data-scroll-speed={4}>
      <svg className="c-scroll-circle_logo" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 148">
        <path d="M76.44 10.68c-.368
        0-.624-.112-.768-.336-.128-.224-.192-.512-.192-.864
        0-.304.064-.624.192-.96.128-.336.256-.712.384-1.128.144-.416.216-.864.216-1.344-.416.24-.776.512-1.08.816-.304.304-.584.592-.84.864a3.76
        3.76 0 0 1-.744.624c-.256.16-.504.24-.744.24-.336
        0-.584-.152-.744-.456-.112-.224-.168-.4-.168-.528
        0-.192.064-.36.192-.504.144-.144.32-.28.528-.408.256-.144.56-.248.912-.312.368-.064.76-.144
        1.176-.24a4.489 4.489 0 0 0
        1.272-.504c-.4-.288-.8-.496-1.2-.624-.4-.128-.776-.24-1.128-.336a4.013
        4.013 0 0 1-.912-.408 2.471 2.471 0 0 1-.48-.408.865.865 0 0
        1-.168-.504c0-.176.072-.36.216-.552.192-.272.432-.408.72-.408.24 0
        .512.112.816.336.24.16.464.392.672.696.208.288.448.592.72.912.272.32.6.624.984.912
        0-.496-.064-.944-.192-1.344-.112-.4-.232-.776-.36-1.128a2.837 2.837 0
        0 1-.192-.96c0-.352.064-.64.192-.864.144-.224.4-.336.768-.336.304 0
        .536.112.696.336.16.208.24.496.24.864 0 .288-.056.608-.168.96l-.36
        1.128c-.112.4-.168.848-.168 1.344.592-.416 1.048-.872
        1.368-1.368.336-.512.672-.896
        1.008-1.152.304-.224.576-.336.816-.336.288 0
        .528.136.72.408.144.192.216.376.216.552a.796.796 0 0
        1-.192.504c-.112.144-.264.28-.456.408-.24.16-.544.296-.912.408-.352.096-.728.208-1.128.336-.4.128-.8.336-1.2.624.432.24.856.408
        1.272.504.416.096.808.176
        1.176.24.368.064.672.168.912.312.224.128.4.264.528.408a.706.706 0 0 1
        .192.48c0 .16-.056.344-.168.552-.176.304-.424.456-.744.456-.24
        0-.488-.08-.744-.24a4.386 4.386 0 0
        1-.768-.624c-.24-.272-.512-.56-.816-.864a4.448 4.448 0 0 0-1.08-.816c0
        .48.056.928.168 1.344.112.416.216.792.312 1.128.112.336.168.656.168.96
        0 .352-.08.64-.24.864-.16.224-.392.336-.696.336ZM101.765 17.476c-1.45
        2.848-.603 5.748 2.162 7.345 2.66 1.535 5.751.742
        7.263-1.876.78-1.351.914-2.88.378-4.16-.38-.83-.856-1.492-2.16-2.883-1.153-1.22-1.502-1.67-1.713-2.264-.209-.647-.104-1.5.304-2.207.9-1.559
        2.67-2.033 4.209-1.145 1.558.9 2.006 2.572 1.159
        4.327l1.6.924c1.378-2.53.613-5.189-1.902-6.64-2.473-1.429-5.257-.736-6.649
        1.675-.612 1.06-.805 2.307-.491 3.347.267.93.604 1.402 2.076 3.028
        1.002 1.05 1.499 1.724 1.815 2.378.389.862.307 1.867-.233 2.803-1.02
        1.767-3.032 2.323-4.799
        1.303-.977-.564-1.66-1.54-1.813-2.571-.125-.792-.012-1.42.436-2.436l-1.642-.948ZM131.905
        48.518c-1.183-.176-1.815-.31-2.509-.602-1.411-.571-2.66-1.68-3.464-3.072-2.064-3.575-.814-8.177
        2.803-10.264 3.7-2.136 8.134-.983 10.258 2.696.768 1.33 1.135 2.78
        1.037 4.195-.04.938-.258 1.618-.836 2.728l.996 1.725c1.955-2.709
        2.017-6.347.181-9.527-2.64-4.572-8.005-5.992-12.598-3.34-4.511
        2.604-5.895 8.03-3.243 12.624 1.8 3.118 4.623 4.647 8.359
        4.541l-.984-1.704ZM139.624 74.827c.36 3.408 2.232 5.232 5.424 5.232
        2.208 0 3.888-.936
        4.824-2.664.6-1.104.864-2.616.864-4.968v-4.392H133v1.776h16.128v2.496c0
        1.872-.192 3.12-.648 4.08-.576 1.2-1.776 1.872-3.384 1.872-2.016
        0-3.288-.912-3.744-2.688-.216-.84-.312-1.992-.312-3.96L133
        77.587v2.208l6.624-4.968ZM139.94 110.349c2.544-4.406
        1.096-10.203-3.165-12.663-4.468-2.58-10.131-1.027-12.747 3.504-2.556
        4.427-1.073 10.161 3.271 12.669 4.386 2.532 10.073.938
        12.641-3.51Zm-1.414-.816c-2.076 3.596-6.752 4.831-10.347
        2.755-3.555-2.052-4.79-6.728-2.738-10.282a7.595 7.595 0 0 1
        10.393-2.785c3.512 2.028 4.744 6.758 2.692 10.312ZM106.905
        119.82l-7.898 4.56.803 1.393 6.361-3.672 8.064 13.967
        1.538-.888-8.868-15.36ZM79.219
        130h-9.12v1.608h7.344v16.128h1.776V130ZM44.576
        126.818c.318.184.484.409.497.675-.001.258-.09.539-.266.844a2.688 2.688
        0 0 1-.646.736c-.279.227-.578.488-.897.785a4.07 4.07 0 0 0-.859
        1.056c.48 0 .928-.056 1.343-.167.416-.111.802-.221
        1.16-.328.336-.102.655-.158.956-.169.302-.01.557.044.765.164.29.168.43.424.416.767-.015.25-.055.431-.119.542a.736.736
        0 0 1-.418.34 2.809 2.809 0 0 1-.661.089 2.918 2.918 0 0
        1-.946-.185c-.35-.129-.73-.256-1.138-.381a4.51 4.51 0 0
        0-1.354-.199c.202.449.445.829.727
        1.14.283.311.552.596.81.855.248.273.443.543.585.81.102.206.173.404.212.593a.865.865
        0 0
        1-.107.52c-.088.153-.242.276-.463.37-.302.14-.578.138-.828-.006-.207-.12-.387-.353-.538-.699a2.552
        2.552 0 0 1-.234-.939 14.817 14.817 0 0 0-.168-1.15 6.055 6.055 0 0
        0-.396-1.282c-.248.43-.416.85-.505 1.26a15.74 15.74 0 0 0-.253
        1.157c-.065.369-.17.678-.313.928-.177.304-.376.522-.599.652-.236.122-.514.091-.833-.093-.263-.152-.408-.365-.435-.639-.034-.26.04-.55.224-.868.145-.25.353-.499.626-.748l.876-.797c.297-.29.57-.65.817-1.08-.72.065-1.343.232-1.868.501-.547.276-1.03.44-1.45.494-.375.042-.666.003-.874-.117-.25-.144-.39-.382-.42-.714-.028-.238.001-.433.09-.586a.795.795
        0 0 1
        .418-.34c.169-.069.368-.111.599-.125.287-.019.619.015.993.102.353.093.735.184
        1.145.273.41.089.861.109 1.351.06a4.914 4.914 0 0 0-.85-1.073 21.807
        21.807 0 0 0-.898-.795c-.286-.24-.498-.482-.633-.727a2.07 2.07 0 0
        1-.254-.617.707.707 0 0 1
        .074-.512c.08-.138.22-.27.422-.394.304-.175.595-.183.872-.023.208.12.383.314.524.58.142.267.26.575.353.925.072.355.164.741.275
        1.156.097.407.273.823.527
        1.247.24-.416.416-.832.527-1.248.11-.417.209-.794.294-1.133.07-.347.182-.652.334-.916.176-.305.39-.514.64-.628.25-.114.507-.095.77.057ZM31.055
        107.154l-2.388-4.136c-1.332-2.308-2.62-3.725-4.19-4.62-2.716-1.536-5.67-1.466-8.537.19-2.89
        1.668-4.48 4.194-4.523 7.239-.02 1.98.583 3.793 2.19 6.578l2.089 3.617
        15.36-8.868Zm-2.28-.734L16.2
        113.68l-1.236-2.141c-1.332-2.307-1.896-4.005-1.879-5.511.06-2.391
        1.406-4.525 3.692-5.845 2.016-1.164 4.239-1.394 6.198-.64 1.685.661
        2.992 2.013 4.564 4.736l1.236 2.141ZM.952 72.99c0 5.088 4.152 9.384
        9.072 9.384 5.16 0 9.288-4.176 9.288-9.408
        0-5.112-4.152-9.336-9.168-9.336-5.064 0-9.192 4.224-9.192 9.36Zm1.632
        0c0-4.152 3.432-7.56 7.584-7.56 4.104 0 7.512 3.432 7.512 7.536a7.595
        7.595 0 0 1-7.608 7.608c-4.056 0-7.488-3.48-7.488-7.584ZM24.577
        50.067l1.152-1.996-10.651-10.639 14.563 3.864
        1.14-1.975-12.816-13.274-.912 1.58 11.181 11.498-15.489-4.037-.84
        1.455 11.241 11.395-15.549-3.933-.912 1.58 17.892 4.482ZM41.887
        28.032l1.538-.888-7.8-13.51 16.945 8.23
        1.538-.888-8.868-15.36-1.538.888 7.356 12.741-15.96-7.773-2.08 1.2
        8.869 15.36Z" fill="#fff" />
      </svg>
    </div>
  )
};

export default Circle;
